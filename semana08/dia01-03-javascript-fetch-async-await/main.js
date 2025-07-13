// OBJETIVO: Realizar peticiones HTTP asíncronas mediante el API fetch usando async/await

// 01 - Promises
// fetch('https://jsonplaceholder.typicode.com/users')
  // Necesitammos averiguar si llegó una respuesta correcta o un error
  // usamos .then para procesar la respusta correcta
  // .then(response => response.json()) // Convertimos la respuesta a un objeto JS
  // .then(data => {
    // console.log(data) // Aquí podemos usar el objeto JS
  // })
  // Usamos .catch para recibir cualquier error inesperado
  // .catch(error => console.log(error))

const url = 'https://jsonplaceholder.typicode.com/users-que-no-existe'

const fetchUsersSinRetorno = async () => { // Retorna una promesa (Promesa)
  const response = await fetch(url)

  const json = await response.json()

  console.log(json)
}

// fetchUsersSinRetorno()

const fetchUsersConRetorno = async () => { // Retorna una promesa (Promesa)
  const response = await fetch(url)

  return await response.json()
}

console.log(fetchUsersConRetorno()) // Promise {<pending>}

const fetchUsersConRetornoYManejoDeErrores = async () => {
  try {
    const response = await fetch(url)

    if (!response.ok) { // ok === STATUS CODE 200
      console.log('Tuvimos problmeas para cargar el recurso users')
      throw new Error('ERROR HTTP', response.status)
    }
    
    return await response.json()
  } catch(error) {
    console.log('CATCH ERROR', error) //  Errores inesperados
  }
}

fetchUsersConRetornoYManejoDeErrores()

const renderUsers = (users = []) => {
  const divApp = document.querySelector('#app')

  let userList = ''

  users.forEach(user => {
    userList += `
      <div>
        <h2>${user.id} - ${user.name}</h2>
        <p>${user.email}</p>
      </div>
    `
  })

  divApp.innerHTML = userList
}

// fetchUsersConRetorno()
//   .then(users => renderUsers(users))