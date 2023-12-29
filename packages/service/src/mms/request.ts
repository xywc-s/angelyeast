import axios from 'axios'
import { BaseConfig, common, form, getDefaultConfig } from '../config'
import { reqInterceptor, resInterceptor } from '../interceptors'

const baseURL = '/mms'
const config = BaseConfig.get('MMS') ?? getDefaultConfig({ ...common, ...form, baseURL })
const request = axios.create(config)

request.interceptors.request.use(reqInterceptor.default.success, reqInterceptor.default.error, {
  synchronous: true
})
request.interceptors.response.use(resInterceptor.angel.success, resInterceptor.angel.error, {
  synchronous: true
})
export default request
