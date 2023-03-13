import { ElMessage } from 'element-plus'
import { isRef } from 'vue'
import type { Ref } from 'vue'
import type { AngelResponse } from '@angelyeast/types/request'

/**
 * 接口调用处理函数
 */
export function useFetch<T, P>(options: FetchOptions<T, P>) {
  options = Object.assign({ autoNotify: true }, options)
  options.loading && checkAndToggleLoading(options.loading, true)
  const params = options.params ?? {}
  options
    .fn(params as any)
    .then((res) => {
      const { success, message } = res as AngelResponse<unknown, unknown>
      if (success) {
        options.autoNotify && message && ElMessage.success(message)
        if (options.hooks?.success) options.hooks.success(res)
      } else {
        message && ElMessage.error(message)
        if (options.hooks?.error) options.hooks.error(res)
      }
    })
    .catch((error) => {
      if (options.hooks?.error) options.hooks.error(error)
    })
    .finally(() => {
      options.loading && checkAndToggleLoading(options.loading, false)
      if (options.hooks?.finally) options.hooks.finally()
    })
}

function checkAndToggleLoading(loading: FetchLoading, value: boolean) {
  if (isRef<boolean>(loading)) loading.value = value
  else loading(value)
}

export type FetchLoading = Ref<boolean> | ((b: boolean) => void)
export type FetchOptions<T, P> = {
  /**
   * 一个返回Promise的接口方法
   */
  fn: (p: P) => Promise<T>
  /**
   * fn的参数
   */
  params?: P
  /**
   * loading状态
   */
  loading?: FetchLoading
  /**
   * 钩子
   */
  hooks?: Partial<FetchOptionHooks<P, T>>
  /**
   * 接口返回成功时是否自动弹出通知消息,内容为接口返回的message
   * @description 处理一些查询接口成功时,默认返回成功查询成功提示, 设置为false可取消提示, 实际场景中查询成功并不需要提示,仅失败后需要提示
   */
  autoNotify?: boolean
}

export interface FetchOptionHooks<P, T> {
  before: (p: P) => any
  success: (response: T) => void
  error: (error: any) => void
  finally: () => void
}
