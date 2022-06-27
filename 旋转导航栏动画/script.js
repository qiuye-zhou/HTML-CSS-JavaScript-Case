const open = document.querySelector('#open')
const close = document.querySelector('#close')
const con = document.querySelector('.container')
open.addEventListener('click',() => {
    con.classList.add('show-nav')
})
close.addEventListener('click',() => {
    con.classList.remove('show-nav')
})