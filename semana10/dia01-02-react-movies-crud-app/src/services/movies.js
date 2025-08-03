const JSONSERVER_API_URL = 'http://localhost:3000'

const API_RESOURCE_MOVIES = `${JSONSERVER_API_URL}/movies`

export const fetchMovies = async () => {
  const response = await fetch(API_RESOURCE_MOVIES) // GET 

  return response.json()
}

export const createMovie = async (dataForm) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Mimetypes
    },
    body: JSON.stringify(dataForm)
  }

  const response = await fetch(API_RESOURCE_MOVIES, options)

  return await response.json()
}