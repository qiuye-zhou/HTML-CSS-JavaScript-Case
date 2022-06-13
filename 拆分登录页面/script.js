const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', () => container.classList.add('hoverleft'))
left.addEventListener('mouseleave', () => container.classList.remove('hoverleft'))
right.addEventListener('mouseenter', () => container.classList.add('hoverright'))
right.addEventListener('mouseleave', () => container.classList.remove('hoverright'))