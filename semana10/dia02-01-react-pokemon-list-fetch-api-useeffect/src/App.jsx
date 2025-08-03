import { useEffect, useState } from "react"

const App = () => {
  const [pokemons, setPokemons] = useState([])

  // Genera un llamado infinito al api de pokemons por que actualizamos el estado pokemons
  // fetch('https://pokeapi.co/api/v2/pokemon') // Devuelve una promise
  //   .then(response => response.json())
  //   .then(data => {
  //     setPokemons(data.results)
  //   })

  // useEffect: Manejar el ciclo de vida de nuestro componente: Creación, actualización, destrucción
  // useEffect(fn, [dependencies])
  // Un arreglo en las dependencias significa que se ejecuta solo en el primer render

  useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon') // Devuelve una promise
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setPokemons(data.results)
        })
  }, [])

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
      </section>

      <pre className="bg-slate-200 p-4">{JSON.stringify(pokemons, null, 2)}</pre>
    </>
  )
}

export default App