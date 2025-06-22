export function renderImages(images) {
  if (!Array.isArray(images)) {
    console.warn(
      '⚠️ No se pueden renderizar: no es un array de imágenes.',
      images
    )
    return
  }
  const containerImages = document.getElementById('gallery-container')
  containerImages.classList.add('gallery-container')
  containerImages.innerHTML = ''

  images.forEach((image) => {
    const img = document.createElement('img')
    img.src = image.urls.small
    img.alt = image.alt_description || 'Imagen sin descripción'
    img.loading = 'lazy'
    img.classList.add('gallery-image')
    containerImages.appendChild(img)
  })
}
