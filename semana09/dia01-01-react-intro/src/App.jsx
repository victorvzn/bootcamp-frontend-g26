// 07 - USANDO EXPRESIONES CON JSX

import { EDAD, LISTA_DE_FRUTAS } from "./components/frutas"

const App = () => {
  const nombre = 'Victor'

  // Comentario en React dentro del cuerpo de la función

  /* Otro comentario multilínea */

  return (
    <div>
      <h1>Hola React!</h1>
      <p>Estoy en el bootcamp!</p>

      <p>{1 + 2 + 9 ** 2}</p>

      <p>{`Hola ${nombre}`}</p>

      {/* Comentario en React dentro del JSX */}

      <p>{LISTA_DE_FRUTAS}</p>

      <p>{EDAD}</p>
    </div>
  )
}

export default App


// 06 - IMPORTANDO COMPONENTES EXTERNOS

// import { ComponenteDespedida } from "./components/ComponenteDespedida"
// import { ComponenteSaludo } from "./components/ComponenteSaludo"

// export default function App() {
//   return (
//     <>
//       <div>App</div>
//       <ComponenteSaludo />
//       <ComponenteDespedida />
//     </>
//   )
// }

// 05 - ANIDANDO COMPONENTES DENTRO DE OTROS

// function ComponenteSaludo() {
//   return <h4>Hola alumnos!</h4>
// }

// function ComponenteDespedida() {
//   return <h4>Adios alumnos!</h4>
// }

// export default function App() {
//   return (
//     <>
//       <div>App</div>
//       <ComponenteSaludo />
//       <ComponenteDespedida />
//     </>
//   )
// }

// 04 - EXTENSION NECESARIA PARA USAR REACT EN VSCODE
// ES7+ React/Redux/React-Native snippets
// https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

// SNIPPETS PARA CREAR COMPONENTES (rfc, rafce)

// snippet: rfc

// export default function App() {
//   return (
//     <div>App</div>
//   )
// }

// snippet: rafce

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App

// 03 - COMPONENTE USANDO MULTIPLES LÍNEAS + FRAGMENTS

// const App = () => {
//   // Cuerpo de la función donde va la lógica del componente

//   return (
//     <>
//       <h1>Hola React!</h1>
//       <p>Estamos aprendiendo más!</p>
//     </>
//   )
// }

// export default App

// 02 - COMPONENTE USANDO ARROW FUNTIONS

// const App = () => {
//   // Cuerpo de la función donde va la lógica del componente

//   return <h1>Hola React!</h1>
// }

// export default App


// 01 - COMPONENTE USANDO FUNCTION

// function App() {
//   return (
//     <h1>Vite + React</h1>
//   )
// }

// export default App
