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
            src="${movie.image}
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

fetchMovies()
  .then(data => {
    renderMovies(data)
  })
