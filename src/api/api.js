import axios from 'axios'

export default {
    getData (params) {
        return axios.get('/getData', params)
    },
    delete (params) {
        return axios.post('/delete', params)
    }
}