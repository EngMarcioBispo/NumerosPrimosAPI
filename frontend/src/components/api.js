import axios from 'axios'


const api = axios.create({
  baseURL:'https://divisores-primos-api.herokuapp.com/divisores/'   
})


export default api;
