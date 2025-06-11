import './style.css'
import { crearNavLeft } from './componentes/nav-left.js'
import { crearNavSearch } from './componentes/nav-search.js'
import { crearNavRight } from './componentes/nav-right.js'

const header = document.querySelector('header')
const nav = document.createElement('nav')
nav.classList.add('nav')
header.appendChild(nav)

const navleft = crearNavLeft()
const navSearch = crearNavSearch()
const navright = crearNavRight()

nav.append(navleft, navSearch, navright)

console.log(crearNavLeft())
console.log(crearNavSearch())

const main = document.querySelector('main')
const section = document.createElement('section')
section.classList.add('main-section')
main.appendChild(section)
