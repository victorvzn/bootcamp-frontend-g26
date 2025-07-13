const url = 'https://jsonplaceholder.typicode.com/posts'

// OBJETIVO: Consultar la información en formato JSON desde una URL desde JS

// console.log(fetch(url)) // Devuelve una promesa (Promise)

// fetch(url)
//   .then(response => response.json()) // Convertimos la respuesta a un objeto JS
//   .then(data => {
//     console.log(data) // Aquí podemos usar el objeto JS
//     console.log(data[0].title)
//   })

// STATUS CODE: 
// * 200 OK
// * 201 Created
// * 204 No Content
// * 400 Bad Request
// * 401 Unauthorized
// * 403 Forbidden
// * 404 Not Found
// * 500 Internal Server Error

// TODO: Renderizar todos los posts en la página mostrarndo su id, title y body

const renderPosts = (posts = []) => {
  const elApp = document.querySelector('#app')

  let postList = ''

  posts.forEach(post => {
    postList += `
      <article>
        <h2>${post.id} - ${post.title}</h2>
        <p>${post.body}</p>
      </article>
    `
  })

  elApp.innerHTML = postList
}

fetch(url)
  .then(response => response.json())
  .then(data => {
    renderPosts(data)
  })