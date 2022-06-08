const img = document.querySelectorAll('.img');
const li = document.querySelectorAll('nav ul li');
console.log(img);
li.forEach((l, index) => {
    l.addEventListener('click', () => {
        hideimg()
        hideli()
        l.classList.add('active')
        img[index].classList.add('show')
    })
})

function hideimg() {
    img.forEach((i) => {
        i.classList.remove('show');
    })
}
function hideli() {
    li.forEach((l) => {
        l.classList.remove('active')
    })
}