const loadtext = document.querySelector('.loding');
const backg = document.querySelector('.backg');

let loadnum = 0;
let init = setInterval(bluring, 50);

function bluring() {
    loadnum++;
    if (loadnum > 99) {
        clearInterval(init);
    }
    loadtext.innerHTML = `${loadnum}%`;
    loadtext.style.opacity = change(loadnum, false, 8);//百分比进度逐渐隐藏
    backg.style.filter = `blur(${change(loadnum, true, 0)}px)`;//背景模糊逐渐变小
}
const change = (num, blurr,sped) => {
    if (blurr) {
        return 100 - num;
    }
    return ((100 - num) / 100) * sped;
}
// const change = (num,blurr) => {
//     if(blurr){
//         return 100 - num;
//     }
//     return (100 - num)/100;
// }