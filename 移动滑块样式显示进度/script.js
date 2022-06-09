const range = document.querySelector('#range')
range.addEventListener('input', (r) => {
    const value = r.target.value
    // 获取进度条进度
    const label = r.target.nextElementSibling
    // 获取触发事件Ele的下一个兄弟Ele
    const range_width = getComputedStyle(r.target).getPropertyValue('width')
    const label_width = getComputedStyle(label).getPropertyValue('width')
    // 获取range和label的宽度
    const num_width = range_width.substring(0, range_width.length - 2)
    const num_label_wdith = label_width.substring(0, label_width.length - 2)
    // 获取宽度数字
    const max = r.target.max
    const min = r.target.min
    const left = value * (num_width / max) - num_label_wdith / 2 + scale(value, min, max, 10, -10)
    label.style.left = `${left}px`
    label.innerHTML = value
})
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
// 左边少减10px右边多减少10px