import axios from 'axios'

const api = axios.create({
  //baseURL: 'http://localhost:8080/'
  baseURL: 'http://react-introduction-diogo-queiroz.c9users.io:8080/'
})

const apis = {
  loadGenres: () => api.get('genres')
}

export default apis