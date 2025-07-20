import { createMovie, fetchMovies } from "./services.js"

// TODO: 01 - Crear la función renderMovies para mostrar los datos de las peliculas en la tabla.

export const renderMovies = (movies = []) => {
  const elMovieList = document.querySelector('.movies__list')

  let elements = ''

  movies.forEach(movie => {
    elements += `
      <tr>
        <td>${movie.id}</td>
        <td>
          <img
            src="${movie.image}"
            width="100"
            height="150"
            onerror="this.src='https://placehold.co/100x150?text=Error'"
          />
        </td>
        <td>
          <strong>${movie.name}</strong>
          <div class="text-small">
            <strong>Release:</strong> ${movie.release}
          </div>
          <div class="text-small">
            <strong>Summary:</strong> ${movie.summary}
          </div>
        </td>
        <td>
          <div class="flex gap-0.5">
            <button class="movies__edit">✏</button>
            <button class="movies__remove" data-id="${movie.id}">❌</button>
          </div>
        </td>
      </tr>
    ` 
  })

  elMovieList.innerHTML = elements

  const removeButtons = document.querySelectorAll('.movies__remove')

  removeButtons.forEach(button => {
    button.addEventListener('click', async (event) => {
      const { id } = event.target.dataset

      console.log(id)

      // TODO: 03 - Terminar de hacer el llamado a la función 'deleteMovie(id)' y refrescar la tabla de peliculas

      const confirmDelete = confirm('¿Estas seguro de eliminar esta película?')

      if (confirmDelete) {
        console.log('Borrar la pelicula')
      }
    })
  })
}

// TODO: 02 - Crear una nueva película desde el formulario

const elMoviesForm = document.querySelector('#moviesForm')

elMoviesForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  console.log('Creando una pelicula')
  // 1. Extraer los datos del formulario
  const peliculaForm = document.forms['moviesForm']

  const id = peliculaForm.id.value

  const name = peliculaForm.name.value
  const image = peliculaForm.image.value
  const release = peliculaForm.release.value
  const genreId = peliculaForm.genreId.value
  const summary = peliculaForm.summary.value

  // 2. Crear la película en el servidor
  const newMovie = {
    name,
    image,
    release,
    genreId,
    summary
  }
  
  const response = await createMovie(newMovie)

  if (response) {
    const movies = await fetchMovies()

    renderMovies(movies)
  }

  peliculaForm.reset()
})