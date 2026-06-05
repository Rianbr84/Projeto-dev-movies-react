import axios from "axios"
import { languages } from "eslint-plugin-prettier"

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: 'd7e5342171f56ae5a52d3f3528b68950',
        language: 'pt-br',
        page: 1
    }
})

export default api