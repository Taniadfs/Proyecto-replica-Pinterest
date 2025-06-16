export function crearMainSection() {
  const main = document.querySelector('main')
  const section = document.createElement('section')
  section.classList.add('main-section')
  section.id = 'gallery-section'
  main.appendChild(section)
  return section
}
