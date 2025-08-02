const MOCKAPI_URL = 'https://68865f31f52d34140f6c1285.mockapi.io/api/v1/'

const ENDPOINT_STUDENTS = `${MOCKAPI_URL}/students`

export const fetchStudents = async () => { // Devuelve una promesa
  const response = await fetch(ENDPOINT_STUDENTS)

  return await response.json()
}