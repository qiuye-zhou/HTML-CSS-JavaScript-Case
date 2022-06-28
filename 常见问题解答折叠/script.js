const togs = document.querySelectorAll('.faq-toggle')
togs.forEach((t) => {
    t.addEventListener('click',() => {
        // console.log(t.parentNode);
        t.parentNode.classList.toggle('active')
        // t.parentNode 即faq-toggle  的父Node  faq
    })
})