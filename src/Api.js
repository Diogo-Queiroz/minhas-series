import axios from 'axios'

const api = axios.create({
  //baseURL: 'http://localhost:8080/'
  baseURL: 'http://react-introduction-diogo-queiroz.c9users.io:8080/'
})

export const loadGenres = () => api.get('genres')
export const saveSeries = (newSeries) => api.post('series', newSeries)
export const loadSeriesByGenre = (genre) => api.get('series?genre='+genre)

const apis = {
  loadGenres: loadGenres,
  saveSeries: saveSeries,
  loadSeriesByGenre: loadSeriesByGenre
}

export default apis