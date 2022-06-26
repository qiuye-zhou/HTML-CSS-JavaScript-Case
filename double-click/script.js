const con = document.querySelector('.con')
const num = document.querySelector('#num')
const time = 800
//time毫秒内点击两次算双击一次
let clitime = 0
//用于计算双击事件
let clinum = 0
con.addEventListener('click', (e) => {
  if (clitime === 0) {
    clitime = new Date().getTime()
  } else {
    if ((new Date().getTime() - clitime) < time) {
      createheart(e)
      clitime = 0
    } else {
      clitime = new Date().getTime()
    }
  }
})

const createheart = (e) => {
  const heart = document.createElement('i')
  heart.classList = 'fas fa-heart'

  const x = e.clientX
  const y = e.clientY

  const topoffset = e.target.offsetTop
  const leftoffset = e.target.offsetLeft

  const xx = x - leftoffset
  const yy = y - topoffset
  heart.style.top = `${yy}px`
  heart.style.left = `${xx}px`

  con.appendChild(heart)

  num.innerHTML = ++clinum

  setTimeout(() => heart.remove(), 1000)
}