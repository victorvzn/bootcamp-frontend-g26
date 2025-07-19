const fetchPokemons = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon/'

  const response = await fetch(url)

  return response.json()
}

const renderPokemons = (pokemons = []) => {
  const pokemonList = document.querySelector('#pokemonList')

  let elements = ''

  // TODO: 01 - Renderizar la imagen de cada pokemon

  pokemons.forEach(pokemon => {
    elements += `
      <article class="pokemon-item">
        <h3>${pokemon.name}</h3>
        <img
          src="https://placehold.co/80x80"
          width="80"
          height="80"
        />
      </article>
    `
  })

  pokemonList.innerHTML = elements
}

fetchPokemons()
  .then(data => {
    console.log(data)
    renderPokemons(data.results)
  })