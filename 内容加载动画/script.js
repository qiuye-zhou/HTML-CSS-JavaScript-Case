const header = document.querySelector('.card-header')
const title = document.querySelector('.card-title')
const excerpt = document.querySelector('.card-excerpt')
const profile = document.querySelector('.profile-img')
const name = document.querySelector('#name')
const date = document.querySelector('#date')

const animatedbgs = document.querySelectorAll('.animated-bg')
const animatedbgtexts = document.querySelectorAll('.animated-bg-text')

setTimeout(getdata, 5000)

function getdata() {
    header.innerHTML = '<img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fc8990847da26d99658c8a21bc3f5753615633508.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657881675&t=9a9d3184f0cf9c8809d79855a715d316" alt="" />'
    title.innerHTML = 'one1 one2 one3 one4 one5'
    excerpt.innerHTML = 'one1 one2 one3 one4 one5one1 one2 one3 one4 one5one1 one2 one3 one4 one5'
    profile.innerHTML = '<img src="https://img0.baidu.com/it/u=313885032,3796279802&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" alt="" />'
    name.innerHTML = 'skd'
    date.innerHTML = '2022-06-15'
    animatedbgs.forEach((b) => b.classList.remove('animated-bg'))
    animatedbgtexts.forEach((b) => b.classList.remove('animated-bg-text'))
}