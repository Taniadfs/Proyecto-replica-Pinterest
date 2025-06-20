import { getImages } from '../api/get-images.js'
import { renderImages } from './gallery.js'

let primeraBusqueda = null

export default function iniciarSearchListener(boton, input) {
  boton.addEventListener('click', async () => {
    console.log('Has hecho click en la lupa')
    const query = input.value.trim()
    if (query === '') return

    input.value = ''

    let images = await getImages(query)
    console.log('Resultados de la búsqueda:', images)

    if (!images || images.length === 0) {
      images = await getImages('gatos')
      console.log('No se encontraron resultados, mostrando gatos:', images)
    } else {
      if (!primeraBusqueda) {
        primeraBusqueda = query.trim().toLowerCase()
      }
      console.log('Primera búsqueda:', primeraBusqueda)
    }
    renderImages(images)
  })
}

export async function reiniciarPrimeraBusqueda(input) {
  if (!primeraBusqueda) return

  const images = await getImages(primeraBusqueda)
  console.log('Reiniciando primera búsqueda:', images)
  renderImages(images)
  input.value = ''
}
