const btn = document.querySelector('button')
const ca = document.querySelector('#ca')
const message = [
    'message 1',
    'message 2',
    'message 3',
    'message 4',
    'message 5',
]
const type = ['info', 'success', 'error']
btn.addEventListener('click', () => createca())

function createca(message = null, type = null) {
    const div = document.createElement('div')
    div.classList.add('ca')
    div.classList.add(type ? type : gettype())
    div.innerText = message ? message : getmessage()
    ca.appendChild(div)
    setTimeout(() => {
        div.remove()
    }, 3000)
}

function gettype() {
    return type[Math.floor(Math.random() * type.length)]
}
function getmessage() {
    return message[Math.floor(Math.random() * message.length)]
}