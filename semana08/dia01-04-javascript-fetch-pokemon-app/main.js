let pokemonFavorites = JSON.parse(localStorage.getItem('pokemon-favorites')) ?? []

console.log(pokemonFavorites)

const fetchPokemons = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon/'

  const response = await fetch(url)

  const data = await response.json()

  const dataResults = data.results.map(pokemon => {
    const id = pokemon.url.split('/').at(6)
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    const foundFavorite = pokemonFavorites.find(favorite => favorite.id === id)
    const isFavorite = Boolean(foundFavorite)
    
    console.log(foundFavorite)

    return {
      ...pokemon,
      id,
      name: isFavorite ? foundFavorite.name : pokemon.name,
      image: isFavorite ? foundFavorite.image : image,
      isFavorite,
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
        <div>
          <button onclick="toggleFavorite('${pokemon.id}','${pokemon.name}','${pokemon.image}')">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-star ${pokemon.isFavorite ? 'is-favorite' : ''}"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
          </button>
          <button
            onclick="readPokemon('${pokemon.id}')"
            class="${!pokemon.isFavorite ? 'is-hidden' : ''}"
          >
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
          </button>
        </div>
      </article>
    `
  })

  pokemonList.innerHTML = elements
}

const toggleFavorite = async (id, name, image) => {
  console.log('favorite...', { id, name, image })
  const foundPokemonFavorite = pokemonFavorites.filter(favorite => favorite.id === id)
  const existPokemonFavorite = foundPokemonFavorite.length > 0

  if (existPokemonFavorite) {
    // Necesitamos retirar el pokemon de favoritos cuando ya existe
    pokemonFavorites = pokemonFavorites.filter(
      pokemon => pokemon.id !== id
    )
  } else {
    // Almacenamos el pokemon en memoria y en localstorage si no existe
    pokemonFavorites.push({ id, name, image })
  
    console.log(pokemonFavorites)
  }

  localStorage.setItem('pokemon-favorites', JSON.stringify(pokemonFavorites))

  const data = await fetchPokemons()

  renderPokemons(data.results)
}

const readPokemon = (pokemonId) => {
  console.log(pokemonId)
  const pokemonForm = document.forms['pokemonForm']

  const currentFavoritesPokemons = JSON.parse(
    localStorage.getItem('pokemon-favorites')
  ) ?? []
  const foundPokemon = currentFavoritesPokemons.find(
    favorite => favorite.id === pokemonId
  )

  console.log(foundPokemon)

  if (foundPokemon) {
    // Lllenaremos el formulario con los datos del pokemon
    pokemonForm.id.value = foundPokemon.id
    pokemonForm.name.value = foundPokemon.name
    pokemonForm.image.value = foundPokemon.image
  }
}

const pokemonForm = document.querySelector('#pokemonForm')

pokemonForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  console.log('Guardando pokemon ...')

  const pokemonForm = document.forms['pokemonForm']

  const id = pokemonForm.id.value
  const updatedName = pokemonForm.name.value
  const updatedImage = pokemonForm.image.value

  console.log(id, name, image)

  const updatedPokemons = pokemonFavorites.map(pokemon => {
    if (pokemon.id === id) {
      return {
        id,
        name: updatedName,
        image: updatedImage
      }
    }

    return pokemon
  })

  pokemonFavorites = updatedPokemons

  localStorage.setItem('pokemon-favorites', JSON.stringify(updatedPokemons))

  pokemonForm.reset()

  const data = await fetchPokemons()

  renderPokemons(data.results)
})

fetchPokemons()
  .then(data => {
    console.log(data)
    renderPokemons(data.results)
  })