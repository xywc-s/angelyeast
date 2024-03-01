import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { BaseConfig, common, AngelMicroServeRequestConfig } from '../config'
import { reqInterceptor, resInterceptor } from '../interceptors'
import type { AngelResponse } from '@angelyeast/types'

let request: AxiosInstance

function getRequestInstance() {
  if (request) return request
  const config = BaseConfig.get('default') ?? {}
  request = axios.create({ ...common, ...config })
  const { success: reqS, error: reqE } = reqInterceptor.angel
  const { success: resS, error: resE } = resInterceptor.angel
  request.interceptors.request.use(reqS, reqE, { synchronous: true })
  request.interceptors.response.use(resS, resE, { synchronous: true })
  return request
}

export function useRequest<R = AngelResponse, D = any>(
  config: AxiosRequestConfig<D> & AngelMicroServeRequestConfig
) {
  const instance = getRequestInstance()
  return instance<any, R, D>(config)
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
