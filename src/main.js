import './style.css'

const header = document.querySelector('header')
const nav = document.createElement('nav')
nav.classList.add('nav')
header.appendChild(nav)

const navleft = crearNavLeft()
const navSearch = crearNavSearch()
const navright = crearNavRight()

nav.append(navleft, navSearch, navright)

function crearNavLeft() {
  const left = document.createElement('div')
  left.classList.add('nav-left')

  const logo = document.createElement('img')
  logo.src = '/public/Assets/logo-pinterest-vectoriel.svg'
  logo.alt = 'Logo de Pinterest'
  logo.classList.add('logo')
  left.appendChild(logo)

  const botones = ['Incio', 'Explorar', 'Crear']
  botones.forEach((boton) => {
    const btn = document.createElement('button')
    btn.textContent = boton
    btn.classList.add('nav-button')
    left.appendChild(btn)
  })
  return left
}

console.log(crearNavLeft())
