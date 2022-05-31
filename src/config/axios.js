import Axios from 'axios'

const axios = Axios.create({
    baseURL: `https://dct-pos-app.herokuapp.com/api`
})

export default axios