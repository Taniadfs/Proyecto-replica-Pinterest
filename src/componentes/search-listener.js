import { getImages } from '../api/get-images.js'

export default function iniciarSearchListener(boton, input) {
  boton.addEventListener('click', async () => {
    console.log('Has hecho click en la lupa')
    const query = input.value.trim()

    if (query === '') return
    const images = await getImages(query)
    console.log('Resultados de la búsqueda:', images)
  })
}
