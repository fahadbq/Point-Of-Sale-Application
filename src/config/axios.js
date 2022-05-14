import Axios from 'axios'

const axios = Axios.create({
    baseURL: `https://dct-pos-app.herokuapp.com/api`,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
})

export default axios