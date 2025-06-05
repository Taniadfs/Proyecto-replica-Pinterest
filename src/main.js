import './style.css'

const header = document.querySelector('header')
const nav = document.createElement('nav')
nav.classList.add('nav')
header.appendChild(nav)

const navleft = crearNavLeft()
const navSearch = crearNavSearch()
//const navright = crearNavRight()

nav.append(navleft, navSearch) //navright

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
function crearNavSearch() {
  const navSearch = document.createElement('div')
  navSearch.classList.add('nav-search')

  const inputSearch = document.createElement('input')
  inputSearch.type = 'text'
  inputSearch.placeholder = 'Buscar en Inspirest'
  inputSearch.classList.add('search-input')

  const searchButton = document.createElement('img')
  searchButton.classList.add('search-button')
  searchButton.src = '/Assets/buscar.png'
  searchButton.alt = 'Buscar'

  navSearch.append(inputSearch, searchButton)
  return navSearch
}

console.log(crearNavLeft())
console.log(crearNavSearch())
