const con = document.querySelector('.container')
window.addEventListener('keydown', (e) => {
    con.innerHTML = `
    <div class="key">
    ${event.key === ' ' ? 'Space' : event.key} 
    <small>event.key</small>
  </div>
  <div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
  </div>
  <div class="key">
    ${event.code}
    <small>event.code</small>
  </div>
    `
})