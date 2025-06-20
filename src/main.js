import './style.css'
import { crearNavLeft } from './componentes/nav-left.js'
import { crearNavSearch } from './componentes/nav-search.js'
import { crearNavRight } from './componentes/nav-right.js'
import { crearMainSection } from './componentes/main-section.js'
import iniciarSearchListener from './componentes/search-listener.js'
import { reiniciarPrimeraBusqueda } from './componentes/search-listener.js'

const header = document.querySelector('header')
const nav = document.createElement('nav')
nav.classList.add('nav')
header.appendChild(nav)

const { left: navleft, logo } = crearNavLeft()
const { navSearch, searchButton, inputSearch } = crearNavSearch()
const navright = crearNavRight()

nav.append(navleft, navSearch, navright)

iniciarSearchListener(searchButton, inputSearch)

crearMainSection()
console.log('¡Hola, Inspirest!')
logo.addEventListener('click', () => {
  reiniciarPrimeraBusqueda(inputSearch)
})
