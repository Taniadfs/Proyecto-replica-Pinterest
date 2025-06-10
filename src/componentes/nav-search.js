export function crearNavSearch() {
  const navSearch = document.createElement('div')
  navSearch.classList.add('nav-search')

  const wrapperSearch = document.createElement('div')
  wrapperSearch.classList.add('search-wrapper')

  const inputSearch = document.createElement('input')
  inputSearch.type = 'text'
  inputSearch.placeholder = 'Buscar en Inspirest'
  inputSearch.classList.add('search-input')

  const searchButton = document.createElement('img')
  searchButton.classList.add('search-button')
  searchButton.src = '/Assets/buscar.png'
  searchButton.alt = 'Buscar'

  wrapperSearch.append(searchButton, inputSearch)
  navSearch.append(wrapperSearch)

  return navSearch
}
