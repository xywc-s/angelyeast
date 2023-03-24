import axios from 'axios'
import { BaseConfig, common, form } from '../config'
import { reqInterceptor, resInterceptor } from '../interceptors'

const config = BaseConfig.get('MMS') ?? BaseConfig.get('default')
const request = axios.create({
  ...common,
  ...form,
  ...config,
  baseURL: config?.baseURL ?? '' + '/mms'
})

request.interceptors.request.use(reqInterceptor.default.success, reqInterceptor.default.error)
request.interceptors.response.use(resInterceptor.angel.success, resInterceptor.angel.error)
export default request
