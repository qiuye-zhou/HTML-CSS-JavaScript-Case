let strs = [
    {
        title: "不要放弃"
    },
    {
        title: "答非所问，便是答案",
        stop: 5,
    },
    {
        title: "学习永远无止境",
        stop: 2,
    },
    {
        title: "少说多做",
    },
];
// 当前进行到第几行
let currentIndex = 0;
let h1 = null;
let spans = null;
setTimeout(() => {
    h1 = document.createElement("h1");
    document.body.appendChild(h1);

    init();
}, 2000);
function init() {//初始化效果
    if (currentIndex === strs.length) {
        currentIndex = 0;
    }
    h1.innerHTML = strs[currentIndex].title;
    h1.innerHTML = h1.textContent.replace(/\S/g, "<span>$&</span>");//嵌套span

    let delay = 0;
    spans = [...document.querySelectorAll("span")]
    spans.forEach((span, index) => {//遍历
        delay += 0.1;
        if (strs[currentIndex].stop instanceof Array) {
            if (strs[currentIndex].stop.includes(index)) {
                delay += 0.3;
            }
        } else {
            if (strs[currentIndex].stop == index) {
                delay += 0.3;
            }
        }
        span.style.setProperty(`--delay`, `${delay}s`)
    })
    h1.addEventListener('animationend', lastEnd)
}
function lastEnd(ele) {
    if (ele.target == document.querySelector('h1 span:last-child')) {
        h1.classList.add('edned')
        setTimeout(() => {
            h1.removeEventListener('animationend', lastEnd)
            let delay = 0;
            spans.reverse().forEach((span, index) => {
                h1.classList.remove('ended')
                span.style.width = "2ch";
                span.style.animation = "0.1s text-out ease-in-out forwards";
                delay += 0.05;
                span.style.animationDelay = `${delay}s`;
            })
            h1.addEventListener("animationend", firstEnd);
        }, 2000)
    }
}

function firstEnd(e) {
    if (e.target == document.querySelector("h1 span:first-child")) {
        spans.forEach((item) => {
            item.remove();
        });
        h1.removeEventListener("animationend", firstEnd);
        currentIndex++;
        // h1.classList.add('ended')
        // h1.classList.remove('ended')
        init();
    }
}