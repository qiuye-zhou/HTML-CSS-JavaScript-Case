const tagsele = document.querySelector('#tags')
const textarea = document.querySelector('textarea')
textarea.focus()
textarea.addEventListener('keyup', (e) => {
    createtag(e.target.value)
    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)
        randomtag()
    }
})

function createtag(text) {
    const tags = text.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    tagsele.innerHTML = ''
    tags.forEach(tag => {
        const span = document.createElement('span')
        span.classList.add('tag')
        span.innerHTML = tag
        tagsele.appendChild(span)
    })
}

function randomtag() {
    const sum = 10//设置随机随机次数
    const interval = setInterval(() => {
        const randomta = selrandomtag()
        if (randomta !== undefined) {
            Rendering(randomta)
            setTimeout(() => {
                unRendering(randomta)
            }, 300)
        }
    }, 300)
    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomta = selrandomtag()
            Rendering(randomta)
        }, 300)
    }, (sum - 1) * 300)
}

function selrandomtag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function Rendering(tag) {
    tag.classList.add('higlight')
}

function unRendering(tag) {
    tag.classList.remove('higlight')
}