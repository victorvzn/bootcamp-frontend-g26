export const fetchMovies = async () => {
  const response = await fetch('http://localhost:3000/movies')

  return response.json()
} 