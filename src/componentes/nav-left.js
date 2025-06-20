export function crearNavLeft() {
  const left = document.createElement('div')
  left.classList.add('nav-left')

  const logo = document.createElement('img')
  logo.src = '/public/Assets/logo-pinterest-vectoriel.svg'
  logo.alt = 'Logo de Pinterest'
  logo.classList.add('logo')
  left.appendChild(logo)

  const botonesLeft = ['Incio', 'Explorar', 'Crear']
  botonesLeft.forEach((boton) => {
    const btn = document.createElement('button')
    btn.textContent = boton
    btn.classList.add('nav-button')
    left.appendChild(btn)
  })
  return { left, logo }
}
