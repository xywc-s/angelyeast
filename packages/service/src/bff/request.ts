import axios from 'axios'
import { BaseConfig, getDefaultConfig } from '../config'
import BFFResponseIntercertor from '../interceptors/response/bff'
import type { AxiosRequestConfig, AxiosInstance } from 'axios'

let request: AxiosInstance
const baseURL = '/bff'
const { success, error } = BFFResponseIntercertor

function getRequestInstance() {
  if (request) return request
  const config = BaseConfig.get('BFF') ?? getDefaultConfig({ timeout: 10000, baseURL })
  request = axios.create(config)
  request.interceptors.response.use(success, error, {
    synchronous: true
  })
  return request
}

export function usePost<R = any, D = any>(url: string, data: D, config?: AxiosRequestConfig<D>) {
  const instance = getRequestInstance()
  return instance.post<any, R, D>(url, data, config)
}

export function useGet<R = any, D = any>(url: string, config?: AxiosRequestConfig<D>) {
  const instance = getRequestInstance()
  return instance.get<any, R, D>(url, config)
}
