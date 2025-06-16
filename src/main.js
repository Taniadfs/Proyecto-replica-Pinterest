import './style.css'
import { crearNavLeft } from './componentes/nav-left.js'
import { crearNavSearch } from './componentes/nav-search.js'
import { crearNavRight } from './componentes/nav-right.js'
import { crearMainSection } from './componentes/main-section.js'
import iniciarSearchListener from './componentes/search-listener.js'

const header = document.querySelector('header')
const nav = document.createElement('nav')
nav.classList.add('nav')
header.appendChild(nav)

const navleft = crearNavLeft()
const { navSearch, searchButton, inputSearch } = crearNavSearch()
const navright = crearNavRight()

nav.append(navleft, navSearch, navright)

console.log(crearNavLeft())
console.log(crearNavSearch())
console.log(crearNavRight())
iniciarSearchListener(searchButton, inputSearch)

const mainSection = crearMainSection()
console.log(mainSection())
console.log('¡Hola, Inspirest!')
