import axios from 'axios'
import { constants } from '../utils'

const http = axios.create({
  baseURL: constants.BASE_URL,
  timeout: 30000
})

http.defaults.withCredentials = true

export default http
