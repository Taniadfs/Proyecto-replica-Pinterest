export function crearMainSection() {
  const main = document.querySelector('main')
  const section = document.createElement('section')
  section.classList.add('main-section')
  section.id = 'gallery-section'
  main.appendChild(section)

  const container = document.createElement('div')
  container.id = 'gallery-container'
  section.appendChild(container)

  return { section, container }
}
