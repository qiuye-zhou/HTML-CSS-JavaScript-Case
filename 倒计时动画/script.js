const nums = document.querySelectorAll('.nums span');
const initial = document.querySelector('.initial');
const final = document.querySelector('.final');
const replay = document.querySelector('#replay');

runanimation()//执行动画

function runanimation() {
    nums.forEach((num, index) => {
        const last = nums.length - 1;
        num.addEventListener('animationend', (el) => {//监听animationede动画结束
            if (el.animationName === 'goin' && index !== last) {//结束的是goin进入动画，且不是最后一个span
                num.classList.remove('in')//删除显示状态class
                num.classList.add('out')//添加隐藏状态class
            } else if (el.animationName === 'goout' && num.nextElementSibling) {//结束的是goout隐藏动画，且后面还有兄弟元素
                num.nextElementSibling.classList.add('in')//后的一个兄弟元素添加进入class
            } else {//切换
                initial.classList.add('hide')
                final.classList.add('show')
            }
        })
    })
}

function reset() {//重回初始状态
    initial.classList.remove('hide')
    final.classList.remove('show')
    nums.forEach((num) => {
        num.classList.value = '';//所有span清空class
    })
    nums[0].classList.add('in')//第一给span给class 'in'
}

replay.addEventListener('click', () => {//重播
    reset()
    runanimation()
})