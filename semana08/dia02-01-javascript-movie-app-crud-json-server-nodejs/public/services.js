export const fetchMovies = async () => {
  const url = 'http://localhost:3000/movies'

  const response = await fetch(url)

  return await response.json()
}

export const createMovie = async (form) => { // POST
  const url = 'http://localhost:3000/movies'

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form) // EL body siempre tiene que ser una cadena de texto
  }

  const response = await fetch(url, options)

  return await response.json()
}