import axios from 'axios'
import { BaseConfig } from '../config'
import BFFResponseIntercertor from '../interceptors/response/bff'

const config = BaseConfig.get('BFF') ?? BaseConfig.get('default')

const request = axios.create({
  timeout: 10000,
  ...config,
  baseURL: config?.baseURL ?? '' + '/bff'
})

request.interceptors.response.use(BFFResponseIntercertor.success, BFFResponseIntercertor.error)

export default request
