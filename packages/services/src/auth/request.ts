import axios from 'axios'
import { BaseConfig, common, form } from '../config'
import { reqInterceptor, resInterceptor } from '../interceptors'

const config = BaseConfig.get('Auth') ?? BaseConfig.get('default')

const request = axios.create({
  ...common,
  ...form,
  ...config,
  baseURL: config?.baseURL ?? '' + '/security-server'
})
request.interceptors.request.use(reqInterceptor.default.success, reqInterceptor.default.error, {
  synchronous: true
})
request.interceptors.response.use(resInterceptor.default.success, resInterceptor.default.error, {
  synchronous: true
})
export default request
