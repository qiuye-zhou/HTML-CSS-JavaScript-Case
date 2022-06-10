const container = document.querySelector('.container')
const left = document.querySelector('.con-left')
const right = document.querySelector('.con-right')
const downbtn = document.querySelector('.down')
const upbtn = document.querySelector('.up')
const rightlen = right.querySelectorAll('div').length

let active = 0

left.style.top = `-${(rightlen - 1) * 100}vh`

downbtn.addEventListener('click', () => {
    change('down')
})
upbtn.addEventListener('click', () => {
    change('up')
})

function change(du) {
    const height = container.clientHeight
    // 获取内容高度
    if (du === 'down') {
        active++;
        if (active > rightlen - 1) active = 0
    }
    if (du === 'up') {
        active--;
        if (active < 0) active = rightlen - 1
    }
    left.style.transform = `translateY(${active * height}px)`
    right.style.transform = `translateY(-${active * height}px)`
}