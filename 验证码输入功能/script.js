const codes = document.querySelectorAll('.code')
codes[0].focus()
// 将第一个置于聚焦
codes.forEach((c, i) => {
    c.addEventListener('keydown', (e) => {
        // e是触发的keydown事件，e.key是按下的按键的值
        if (e.key >= 0 && e.key <= 9) {
            console.log(codes[i]);
            codes[i].value = ''
            setTimeout(() => codes[i + 1].focus(), 10)
        } else if (e.key === 'Backspace') {
            setTimeout(() => codes[i - 1].focus(), 10)
        }
        // if (i === codes.length - 1) {
        //     setTimeout(() => codes[i].blur(), 10)
        // }
    })
})