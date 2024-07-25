import { AngelMicroServeRequestConfig } from '../config'
import type { AngelResponse } from '@angelyeast/types'
import { getRequestInstance } from '../common'

export function usePost<R = AngelResponse, D = any>(
  url: string,
  data: D,
  config?: AngelMicroServeRequestConfig<D>
) {
  const instance = getRequestInstance('MMS')
  return instance.post<any, R, D>(url, data, config)
}

export function useGet<R = AngelResponse, D = any>(
  url: string,
  config?: AngelMicroServeRequestConfig<D>
) {
  const instance = getRequestInstance('MMS')
  return instance.get<any, R, D>(url, config)
}
