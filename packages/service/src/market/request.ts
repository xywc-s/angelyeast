import axios from 'axios'
import { BaseConfig, common, form } from '../config'
import { reqInterceptor, resInterceptor } from '../interceptors'

const config = BaseConfig.get('Market') ?? BaseConfig.get('default')
const request = axios.create({
  ...common,
  ...form,
  ...config,
  baseURL: config?.baseURL ?? '' + '/market'
})

request.interceptors.request.use(reqInterceptor.default.success, reqInterceptor.default.error, {
  synchronous: true
})
request.interceptors.response.use(resInterceptor.angel.success, resInterceptor.angel.error, {
  synchronous: true
})
export default request
