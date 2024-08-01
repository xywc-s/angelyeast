import { AngelMicroServeRequestConfig } from '../config'
import type { AxiosRequestConfig } from 'axios'
import type { AngelResponse } from '@angelyeast/types'
import { RequestInstance } from '../common'

export function usePost<R = AngelResponse, D = any>(
  url: string,
  data: D,
  config?: AxiosRequestConfig<D> & AngelMicroServeRequestConfig
) {
  const instance = RequestInstance.getInstance('Auth')
  return instance.post<any, R, D>(url, data, config)
}

export function useGet<R = AngelResponse, D = any>(
  url: string,
  config?: AxiosRequestConfig<D> & AngelMicroServeRequestConfig
) {
  const instance = RequestInstance.getInstance('Auth')
  return instance.get<any, R, D>(url, config)
}
