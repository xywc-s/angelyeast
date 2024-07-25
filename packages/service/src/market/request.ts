import { AngelMicroServeRequestConfig } from '../config'
import { getRequestInstance } from '../common'
import type { AngelResponse } from '@angelyeast/types'

export function usePost<R = AngelResponse, D = any>(
  url: string,
  data: D,
  config?: AngelMicroServeRequestConfig<D>
) {
  const instance = getRequestInstance('Market')
  return instance.post<any, R, D>(url, data, config)
}

export function useGet<R = AngelResponse, D = any>(
  url: string,
  config?: AngelMicroServeRequestConfig<D>
) {
  const instance = getRequestInstance('Market')
  return instance.get<any, R, D>(url, config)
}
