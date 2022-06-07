const toggle = document.querySelector('button');
const nav = document.querySelector('nav');
const lin = document.querySelectorAll('.lin');
toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
})