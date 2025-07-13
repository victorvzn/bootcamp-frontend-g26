// DOCUMENTACIÓN: https://web.dragonball-api.com/

// API: https://dragonball-api.com/api/characters

const url = 'https://dragonball-api.com/api/characters'

const renderCharacters = (characters=[]) => {
  const elApp = document.querySelector('#app')

  let characterList = ''

  characters.forEach(character => {
    characterList += `
      <article>
        <h2>${character.id} - ${character.name}</h2>
        <img src="${character.image}" width="100" />
      </article>
    `
  })

  elApp.innerHTML = characterList
}

fetch(url)
  .then(response => response.json())
  .then(data => {
    renderCharacters(data.items)
    console.log(data)
  })