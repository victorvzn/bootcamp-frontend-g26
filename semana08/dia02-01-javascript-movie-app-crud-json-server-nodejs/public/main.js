import { fetchMovies } from "./services.js"
import { renderMovies } from "./movies.js"

fetchMovies()
  .then(data => {
    renderMovies(data)
  })
