import axios from 'axios'
import { BaseConfig, getDefaultConfig } from '../config'
import BFFResponseIntercertor from '../interceptors/response/bff'

const baseURL = '/bff'
const config = BaseConfig.get('BFF') ?? getDefaultConfig({ timeout: 10000, baseURL })
const request = axios.create(config)

request.interceptors.response.use(BFFResponseIntercertor.success, BFFResponseIntercertor.error, {
  synchronous: true
})

export default request
