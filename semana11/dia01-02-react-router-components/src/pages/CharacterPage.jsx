// TODO: Renderizar la información de un personaje segun su id. Los campos a mostrar son imagen, raza, nombre del planeta, descrición.

import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams, useNavigate } from "react-router"
import { getCharacter } from "../services/characters"

const CharacterPage = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  const [character, setCharacter] = useState()

  useEffect(() => {
    getCharacter(id)
      .then(result => setCharacter(result))
  }, [])

  const handleBackHome = () => {
    navigate('/')
  }

  return (
    <main>
      <h1 className="text-2xl font-medium">Character detail #{id}</h1>

      <section className="bg-yellow-300 rounded-lg p-3 flex flex-col justify-evenly items-center gap-2">
        <button onClick={handleBackHome}>⬅ Back home</button>

        <Link to='/' className="text-blue-500 font-medium">⬅ Back home</Link>

        <img src={character?.image} width={100} />
        <div className="font-bold text-3xl">{character?.name}</div>
        <div className="font-bold bg-orange-300 text-slate-800 p-2 rounded-lg uppercase">{character?.race} from {character?.originPlanet.name}</div>
        <img src={character?.originPlanet.image} width={100} />
      </section>

      <pre className="border p-2 bg-slate-100 mt-4">{JSON.stringify(character, null, 2)}</pre>
    </main>
  )
}

export default CharacterPage