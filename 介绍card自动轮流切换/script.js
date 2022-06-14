const testimonials = [
    {
        name: 'W',
        position: 'W',
        photo:
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fe9daccb5ab75c8615ada28258ad49474b58f8c88.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657707011&t=df7eae107a68bd2746346cd7373d34f7',
        text:
            "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
    },
    {
        name: '42',
        position: '42',
        photo: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13964720878%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657707011&t=c1c712f2a88d781b1b5f9816845103bf',
        text:
            'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
    },
    {
        name: 'Skathi',
        position: 'Skathi',
        photo: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fdafd906daa270bde641957bf002d46119fe930d8.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657707011&t=ebbfeef9f93b0828fb84407e5ae715aa',
        text:
            "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
    },
    {
        name: 'Mint',
        position: 'Mint',
        photo: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Fbigfun%2F3152dca8144f3566dbb49ef8ff378970599ecc2f.jpg%401o&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657707011&t=df1b00d8d35dac975a546a69bf649a60',
        text:
            "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
    },
    {
        name: 'Ghost shark',
        position: 'Ghost shark',
        photo: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fecd65da34e927dff1f9d163604e1d6d7c5f61283.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657707011&t=a5105b9221a8100b2a8fea63227dd59e',
        text:
            "Ghost sharkGhost sharkGhost sharkGhost sharkGhost sharkGhost sharkGhost sharkI had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
    }
]

const testCon = document.querySelector('.testimonials-container')
const test = document.querySelector('.testimonial')
const userimage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

let index = 0
function update() {
    const { name, position, photo, text } = testimonials[index]
    test.innerHTML = text
    userimage.src = photo
    username.innerHTML = name
    role.innerHTML = position
    index++
    if (index > testimonials.length - 1) {
        index = 0
    }
}
update()
setInterval(update, 10000)