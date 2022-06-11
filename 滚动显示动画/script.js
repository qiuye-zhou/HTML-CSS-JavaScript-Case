for (let i = 0; i < 12; ++i) {
    const div = document.createElement("div")
    div.innerHTML = `<h2>box${i + 1}</h2>`
    document.body.appendChild(div)
}
// 创建12个div

const boxs = document.querySelectorAll('div')
window.addEventListener('scroll', scrollbox)
scrollbox()

function scrollbox() {
    const viewheight = window.innerHeight - 180
    boxs.forEach(b => {
        const btop = b.getBoundingClientRect().top
        // 返回当前box与视图窗口顶部的距离
        if (btop < viewheight) {
            b.classList.add('show')
        } else {
            b.classList.remove('show')
        }
    })
}