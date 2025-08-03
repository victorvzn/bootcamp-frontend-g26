import { useEffect, useState } from "react"

// TODO: Cargar los datos de la poke.api, renderizar nombre e imagen y añadir paginación usando el hook useEffect. Opcional: añadir estilos con tailwind.

const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(1)

  // Genera un llamado infinito al api de pokemons por que actualizamos el estado pokemons
  // fetch('https://pokeapi.co/api/v2/pokemon') // Devuelve una promise
  //   .then(response => response.json())
  //   .then(data => {
  //     setPokemons(data.results)
  //   })

  // useEffect: Manejar el ciclo de vida de nuestro componente: Creación, actualización, destrucción
  // useEffect(fn, [dependencies])
  // Un arreglo en las dependencias significa que se ejecuta solo en el primer render

  const fetchPokemons = (page = 1) => {
    const limit = 9
    const offset = (page - 1) * limit

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    fetch(url) // Devuelve una promise
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPokemons(data.results)
      })
  }

  useEffect(() => {
    fetchPokemons(page)
  }, [page])

  return (
    <>
      <section>
        <h1 className="text-2xl text-center">Pokemon List</h1>

        <ul>
          {pokemons.map((pokemon, index) => {
            return (
              <li key={pokemon.url}>{index}: {pokemon.name}</li>
            )
          })}
        </ul> 

        <div>
          <button>First</button>
          <button>Prev</button>
          <span>{page}</span>
          <button onClick={() => setPage(page + 1)}>Next</button>
          <button>Last</button>
        </div>
      </section>

      <pre className="bg-slate-200 p-4">{JSON.stringify(pokemons, null, 2)}</pre>
    </>
  )
}

export default App