import { getRequestInstance as getReqInstance } from '../common/instance'
import BFFResponseIntercertor from '../interceptors/response/bff'
import type { AxiosRequestConfig } from 'axios'

const { success, error } = BFFResponseIntercertor

function getRequestInstance() {
  const instance = getReqInstance('BFF')
  instance.interceptors.response.use(success, error, {
    synchronous: true
  })
  return instance
}

export function usePost<R = any, D = any>(url: string, data: D, config?: AxiosRequestConfig<D>) {
  const instance = getRequestInstance()
  return instance.post<any, R, D>(url, data, config)
}

export function useGet<R = any, D = any>(url: string, config?: AxiosRequestConfig<D>) {
  const instance = getRequestInstance()
  return instance.get<any, R, D>(url, config)
}
