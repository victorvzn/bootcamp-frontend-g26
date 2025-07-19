const fetchPokemons = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon/'

  const response = await fetch(url)

  return response.json()
}

const renderPokemons = (pokemons = []) => {
  const pokemonList = document.querySelector('#pokemonList')

  let elements = ''

  pokemons.forEach(pokemon => {
    elements += `
      <h2>${pokemon.name}</h2>
    `
  })

  pokemonList.innerHTML = elements
}

fetchPokemons()
  .then(data => {
    console.log(data)
    renderPokemons(data.results)
  })