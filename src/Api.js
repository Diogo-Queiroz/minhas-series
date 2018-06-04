import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/'
  //baseURL: 'http://react-introduction-diogo-queiroz.c9users.io:8080/'
})

export const loadGenres = () => api.get('genres')
export const saveSeries = (newSeries) => api.post('series', newSeries)

const apis = {
  loadGenres: loadGenres,
  saveSeries: saveSeries
}

export default apis