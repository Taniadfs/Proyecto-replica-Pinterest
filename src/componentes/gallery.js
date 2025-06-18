export function renderImages(images) {
  const containerImages = document.getElementById('gallery-container')
  containerImages.classList.add('gallery-container')
  containerImages.innerHTML = ''

  images.forEach((image) => {
    const img = document.createElement('img')
    img.src = image.urls.small
    img.alt = image.alt_description || 'Imagen sin descripción'
    img.classList.add('gallery-image')
    containerImages.appendChild(img)
  })
}
