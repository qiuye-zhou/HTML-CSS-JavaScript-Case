const button = document.querySelector('.ripple');
// button.addEventListener('click', (e) => {
//     const x = e.clientX;
//     const y = e.clientY;
//     const buttontop = e.target.offsetTop;
//     // e.target是触发事件的元素
//     //返回当前元素相对于 offsetParent 节点顶部边界的偏移像素值
//     //offsetParent元素是一个指向最近的（指包含层级上的最近）包含该元素的定位元素或者最近的元素
//     const buttonleft = e.target.offsetLeft;

//     const xin = x - buttonleft;
//     const yin = y - buttontop
//     console.log(xin,yin);
//     const cli = document.createElement('span');
//     cli.classList.add('click');
//     cli.style.top = `${yin}px`;
//     cli.style.left = `${xin}px`;
//     button.appendChild(cli);
//     setTimeout(() => cli.remove(), 600)
// })
//上面的效果如果快速点击多次会出现另一个地方也出现波纹
//这个因为上一个创建的span还没删除定位影响了鼠标点击坐标的值


//下面就完美解决了这个问题
//利用了节流解决
//通过result来判断上一个span是否删除，来决定是否执行
let result = true;
button.addEventListener('click', (e) => {
    if (result) {
        const x = e.clientX;
        const y = e.clientY;
        const buttontop = e.target.offsetTop;
        // e.target是触发事件的元素
        //返回当前元素相对于 offsetParent 节点顶部边界的偏移像素值
        //offsetParent元素是一个指向最近的（指包含层级上的最近）包含该元素的定位元素或者最近的元素
        const buttonleft = e.target.offsetLeft;

        const xin = x - buttonleft;
        const yin = y - buttontop;
        const cli = document.createElement('span');
        cli.classList.add('click');
        cli.style.top = `${yin}px`;
        cli.style.left = `${xin}px`;
        button.appendChild(cli);
        result = false;
        setTimeout(() => {
            cli.remove();
            result = true;
        }, 600)
        //注意清除延迟时间在动画执行完后
    }
})