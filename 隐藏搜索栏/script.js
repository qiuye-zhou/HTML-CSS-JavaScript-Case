const sear = document.querySelector('.search')
const inp = document.querySelector('.input')
const btn = document.querySelector('.btn')
console.log(btn);
btn.addEventListener('click', () => {
    sear.classList.toggle('active')
    inp.focus()
    //显示出来后input获得聚焦
})