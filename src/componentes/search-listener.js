import { getImages } from '../api/get-images.js'
import { renderImages } from './gallery.js'

let primeraBusqueda = null

function eliminarMensajeSinResultados() {
  const mensajeExistente = document.querySelector('.mensaje-sin-resultados')
  if (mensajeExistente) mensajeExistente.remove()
}

export default function iniciarSearchListener(boton, input) {
  boton.addEventListener('click', async () => {
    console.log('Has hecho click en la lupa')

    eliminarMensajeSinResultados()
    const query = input.value.trim()
    if (query === '') return
    input.value = ''

    let { results: images, total } = await getImages(query)
    console.log('Resultados de la búsqueda:', images)

    const noMatch = images.every(
      (img) => !img.alt_description?.toLowerCase().includes(query.toLowerCase())
    )

    if (images.length === 0) {
      const fallback = await getImages('gatos')
      images = fallback.results
      console.log('No se encontraron resultados, mostrando gatos:', images)

      const mensaje = document.createElement('p')
      mensaje.textContent =
        'No se encontraron resultados. Te mostramos imágenes de gatos 🐱'
      mensaje.classList.add('mensaje-sin-resultados')
      document.querySelector('main').prepend(mensaje)
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

  const { results: images } = await getImages(primeraBusqueda)
  console.log('Reiniciando primera búsqueda:', images)

  eliminarMensajeSinResultados()

  renderImages(images)
  input.value = ''
}
