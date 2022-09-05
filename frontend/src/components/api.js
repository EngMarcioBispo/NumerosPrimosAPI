import axios from 'axios'


const api = axios.create({
  baseURL:'http://localhost:3003/divisores/'   
})


export default api;