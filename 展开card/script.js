const img = document.querySelectorAll('.img');
img.forEach((e) => {
    e.addEventListener('click', () => {
        img.forEach((ee) => {
            ee.classList.remove('active');
        })
        e.classList.add('active');
    })
})