import { ElMessage } from 'element-plus'
import { isRef } from 'vue'
import { isFunction } from 'lodash-es'
import type { Ref } from 'vue'
import type { AngelResponse } from '@angelyeast/types'

interface LoadingInstance {
  close: () => void
}

/**
 * 接口调用处理函数
 * @param fn 接口函数
 * @param options 选项参数
 */
export function useFetch<P = any, T = any>(fn: API<P, T>, options?: Partial<FetchOptions<P, T>>) {
  options = Object.assign({ autoNotify: true }, options)
  options.loading && checkAndToggleLoading(options.loading, true)
  fn(options.params as P)
    .then((res) => {
      const { success, message } = res as AngelResponse
      if (success) {
        options?.autoNotify && message && ElMessage.success(message)
        if (options?.onSuccess) options?.onSuccess(res)
      } else {
        message && ElMessage.error(message)
        if (options?.onError) options?.onError(res)
      }
    })
    .catch((error) => {
      if (options?.onError) options?.onError(error)
    })
    .finally(() => {
      options?.loading && checkAndToggleLoading(options.loading, false)
      if (options?.onFinally) options?.onFinally()
    })
}

function checkAndToggleLoading(loading: FetchLoading, value: boolean) {
  if (isRef<boolean>(loading)) loading.value = value
  else if (isFunction(loading)) loading(value)
  else loading.close()
}

export type API<P, T> = (p: P) => Promise<T>
export type FetchLoading = Ref<boolean> | ((b: boolean) => void) | LoadingInstance
export interface FetchOptions<P, T> {
  /** 接口参数 */
  params: P
  /** loading状态 */
  loading: FetchLoading
  /**
   * 接口返回成功时, 是否自动弹出通知消息, 内容为接口返回的message
   * @description  默认返回成功提示, 设置为false可取消提示, 实际场景中绝大部分查询成功并不需要提示
   * @default true
   */
  autoNotify: boolean
  /** 成功响应时 */
  onSuccess: (response: T) => void
  /** 失败响应时 */
  onError: (error: any) => void
  /** 接口调用后 */
  onFinally: () => void
}
