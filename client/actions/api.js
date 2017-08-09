import fetch from 'isomorphic-fetch'

const apiUrl = 'http://localhost:3000/api'

export const getTemperatureFromServer = () => {
  return fetch(`${apiUrl}/temp`).then(result => result.json())
}
