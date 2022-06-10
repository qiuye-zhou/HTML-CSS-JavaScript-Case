const h3 = document.querySelector('h3')
const con = document.querySelector('.con')
const btn = document.querySelector('.btn')
const api = 'https://v1.jinrishici.com/all'
btn.addEventListener('click', get)
get()

//使用async/await
async function get() {
    //等待fetch请求完成
    const res = await fetch(api)
    //等待解析json完成
    const data = await res.json()

    h3.innerHTML = data.origin
    con.innerHTML = data.content
}

//使用.then
// function get() {
//     fetch(api)
//         .then((res) => res.json())
//         .then((data) => {
//             h3.innerHTML = data.origin
//             con.innerHTML = data.content
//         })
// }

// function get() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch(api, config)
//     .then((res) => res.json())
//     .then((data) => {
//         h3.innerHTML = data.origin
//         con.innerHTML = data.content
//     })
// }