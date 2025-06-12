async function getImages(query) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=XPeoqeXdO4KBPfoJmbKZQ04eefqdllWVkuMYABRY7Ps`
    )
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error('Error fetching images:', error)
    return []
  }
}
