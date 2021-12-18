import axios from 'axios'

const instance = axios.create({
    baseURL: '' // Sua conexão com o heroku e o backend. Exemplo: https://tinder-backend-heitor.herokuapp.com
})

export default instance