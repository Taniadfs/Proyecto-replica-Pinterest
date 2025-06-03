import './style.css'

const header = document.querySelector('header')
const nav = document.createElement('nav')
nav.classList.add('nav')
header.appendChild(nav)

const navleft = crearNavLeft()
const navSearch = crearNavSearch()
const navright = crearNavRight()

nav.append(navleft, navSearch, navright)

function crearNavLeft ()