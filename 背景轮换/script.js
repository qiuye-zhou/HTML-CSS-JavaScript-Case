const body = document.body;
const con = document.querySelectorAll('.con');
const swleft = document.querySelector('.switch-left');
const swright = document.querySelector('.switch-right');

let activenum = 0;

function addclick(obj, w) {//绑定click
    obj.addEventListener('click', () => {
        if (w === 'left') activenum--;
        if (w === 'right') activenum++;
        if (activenum > con.length - 1) activenum = 0;
        if (activenum < 0) activenum = con.length - 1;
        console.log(activenum);
        setBodyBackg();
        setActivecon();
    })
}

function setBodyBackg() {//设置背景
    body.style.backgroundImage = con[activenum].style.backgroundImage
}

function setActivecon() {//设置当前显示
    con.forEach((c) => {
        c.classList.remove('active')
    })
    con[activenum].classList.add('active')
}

addclick(swleft, 'left');
addclick(swright, 'right');
setBodyBackg()