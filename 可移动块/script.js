const empt = document.querySelectorAll('.empt')
const fil = document.querySelector('.fil')
fil.addEventListener('dragstart', dragstart)
//开始拖拽一个元素或选中的文本时触发
fil.addEventListener('dragend', dragend)
//拖拽操作结束时触发 (比如松开鼠标按键或敲“Esc”键)
for (const e of empt) {
    e.addEventListener('dragover', dragover)
    //当元素或选中的文本被拖到一个可释放目标上时触发（每 100 毫秒触发一次）
    e.addEventListener('dragenter', dragenter)
    //当拖拽元素或选中的文本到一个可释放目标时触发
    e.addEventListener('dragleave', dragleave)
    //当拖拽元素或选中的文本离开一个可释放目标时触发
    e.addEventListener('drop', drop)
    //当元素或选中的文本在可释放目标上被释放时触发
}

function dragstart() {
    this.classList.add('hol')
    setTimeout(() => this.className = 'hide', 0)
}

function dragend() {
    this.className = 'fil'
}

function dragover(e) {
    e.preventDefault();
    //阻止默认行为
}

function dragenter(e) {
    e.preventDefault()
    this.classList.add('hoverwh')
}

function dragleave() {
    this.className = 'empt'
}

function drop() {
    this.className = 'empt'
    this.append(fil)
}