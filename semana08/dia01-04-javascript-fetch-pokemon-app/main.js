const fetchPokemons = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon/'

  const response = await fetch(url)

  const data = await response.json()

  const dataResults = data.results.map(pokemon => {
    const id = pokemon.url.split('/').at(6)
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

    return {
      ...pokemon,
      id,
      image,
    }
  })

  console.log({ dataResults })

  return {
    ...data,
    results: dataResults
  }
}

const renderPokemons = (pokemons = []) => {
  const pokemonList = document.querySelector('#pokemonList')

  let elements = ''

  // TODO: 01 - Renderizar la imagen de cada pokemon

  pokemons.forEach(pokemon => {
    elements += `
      <article class="pokemon-item">
        <h3>${pokemon.id} - ${pokemon.name}</h3>
        <img
          src="${pokemon.image}"
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