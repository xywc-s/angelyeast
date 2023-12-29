import axios from 'axios'
import { BaseConfig, common, form, getDefaultConfig } from '../config'
import { reqInterceptor, resInterceptor } from '../interceptors'

const baseURL = '/security-server'
const config = BaseConfig.get('Auth') ?? getDefaultConfig({ ...common, ...form, baseURL })
const request = axios.create(config)

request.interceptors.request.use(reqInterceptor.default.success, reqInterceptor.default.error, {
  synchronous: true
})
request.interceptors.response.use(resInterceptor.default.success, resInterceptor.default.error, {
  synchronous: true
})
export default request
