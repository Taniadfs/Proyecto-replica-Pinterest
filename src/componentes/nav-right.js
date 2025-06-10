export function crearNavRight() {
  const right = document.createElement('div')
  right.classList.add('nav-right')

  const iconosRight = [
    { src: '/Assets/campana.png', alt: 'Notificaciones' },
    { src: '/Assets/burbuja-de-chat.png', alt: 'Mensajes' },
    { src: '/Assets/usuario-de-perfil.png', alt: 'Perfil' }
  ]

  iconosRight.forEach((icono) => {
    const buttonsRight = document.createElement('button')
    buttonsRight.classList.add('nav-button-right')

    const imgRight = document.createElement('img')
    imgRight.src = icono.src
    imgRight.alt = icono.alt
    imgRight.classList.add('icono-right')

    buttonsRight.appendChild(imgRight)
    right.appendChild(buttonsRight)
  })

  return right
}
