const MOCKAPI_URL = 'https://68865f31f52d34140f6c1285.mockapi.io/api/v1'

const ENDPOINT_STUDENTS = `${MOCKAPI_URL}/students`

export const fetchStudents = async () => { // Devuelve una promesa
  const response = await fetch(ENDPOINT_STUDENTS) // GET

  return await response.json()
}

export const createStudent = async (data) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  const reponse = await fetch(ENDPOINT_STUDENTS, options)

  return await reponse.json()
}

export const removeStudent = async (id) => {
  const options = {
    method: 'DELETE'
  }

  const response = await fetch(`${ENDPOINT_STUDENTS}/${id}`, options)

  return await response.json()
}