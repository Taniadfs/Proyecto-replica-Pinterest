export function crearMainSection() {
  const main = document.querySelector('main')
  const section = document.createElement('section')
  section.classList.add('main-section')
  main.appendChild(section)
  return section
}
