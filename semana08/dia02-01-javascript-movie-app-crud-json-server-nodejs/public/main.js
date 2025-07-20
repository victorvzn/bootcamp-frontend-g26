 // TODO: 01 - Crear la función renderMovies para mostrar los datos de las peliculas en la tabla.

 const renderMovies = (movies = []) => {
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
            <button class="movies__remove">❌</button>
          </div>
        </td>
      </tr>
    ` 
  })

  elMovieList.innerHTML = elements
}

const fetchMovies = async () => {
  const url = 'http://localhost:3000/movies'

  const response = await fetch(url)

  return await response.json()
}

const createMovie = async (form) => { // POST
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
  const summary = peliculaForm.name.summarylue

  // 2. Crear la película en el servidor
  const newMovie = {
    name,
    image,
    release,
    genreId,
    summary
  }
  
  const response = await createMovie(newMovie)

  console.log(response)
})


fetchMovies()
  .then(data => {
    renderMovies(data)
  })
