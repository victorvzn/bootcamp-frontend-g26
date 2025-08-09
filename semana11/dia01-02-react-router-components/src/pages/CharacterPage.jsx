// TODO: Renderizar la información de un personaje segun su id. Los campos a mostrar son imagen, raza, nombre del planeta, descrición.

import { useParams } from "react-router"

const CharacterPage = () => {
  const { id } = useParams()

  return (
    <div>CharacterPage: {id}</div>
  )
}

export default CharacterPage