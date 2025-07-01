import './style.css'

const menu = document.querySelector<HTMLDivElement>('.menu')!
const burguer = document.querySelector<HTMLImageElement>('.burguer')!

burguer.addEventListener('click', ()=>{
    burguer.classList.toggle('active')
    burguer.src = burguer.src === "http://localhost:5173/public/menu.svg" ? "http://localhost:5173/public/circle-x.svg":"/public/menu.svg"
    menu.classList.toggle('active')
})