import axios from 'axios'
import { BaseConfig, common, form, getDefaultConfig, AngelMicroServeRequestConfig } from '../config'
import { reqInterceptor, resInterceptor } from '../interceptors'
import type { AngelResponse } from '@angelyeast/types'
import type { AxiosRequestConfig, AxiosInstance } from 'axios'

let request: AxiosInstance
const baseURL = '/mdm'

export function getRequestInstance() {
  if (request) return request
  const config = BaseConfig.get('MDM') ?? getDefaultConfig({ ...common, ...form, baseURL })
  request = axios.create(config)
  request.interceptors.request.use(reqInterceptor.angel.success, reqInterceptor.angel.error, {
    synchronous: true
  })
  request.interceptors.response.use(resInterceptor.angel.success, resInterceptor.angel.error, {
    synchronous: true
  })
  return request
}

export function usePost<R = AngelResponse, D = any>(
  url: string,
  data: D,
  config?: AxiosRequestConfig<D> & AngelMicroServeRequestConfig
) {
  const instance = getRequestInstance()
  return instance.post<any, R, D>(url, data, config)
}

export function useGet<R = AngelResponse, D = any>(
  url: string,
  config?: AxiosRequestConfig<D> & AngelMicroServeRequestConfig
) {
  const instance = getRequestInstance()
  return instance.get<any, R, D>(url, config)
}
