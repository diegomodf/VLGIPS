//api de comunicação do frontend com o backend
import axios from 'axios'
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})
export default api
