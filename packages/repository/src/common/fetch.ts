import { ElMessage } from 'element-plus'
import { isRef } from 'vue'
import type { Ref } from 'vue'
import type { AngelResponse } from '@angelyeast/types'

/**
 * 接口调用处理函数
 * @param fn 接口函数
 * @param options 选项参数
 */
export function useFetch<T, P>(fn: API<P, T>, options?: Partial<FetchOptions<P, T>>) {
  options = Object.assign({ autoNotify: true }, options)
  options.loading && checkAndToggleLoading(options.loading, true)
  fn(options.params as P)
    .then((res) => {
      const { success, message } = res as AngelResponse
      if (success) {
        options?.autoNotify && message && ElMessage.success(message)
        if (options?.hooks?.success) options?.hooks.success(res)
      } else {
        message && ElMessage.error(message)
        if (options?.hooks?.error) options?.hooks.error(res)
      }
    })
    .catch((error) => {
      if (options?.hooks?.error) options?.hooks.error(error)
    })
    .finally(() => {
      options?.loading && checkAndToggleLoading(options.loading, false)
      if (options?.hooks?.finally) options?.hooks.finally()
    })
}

function checkAndToggleLoading(loading: FetchLoading, value: boolean) {
  if (isRef<boolean>(loading)) loading.value = value
  else loading(value)
}

export type API<P, T> = (p: P) => Promise<T>
export type FetchLoading = Ref<boolean> | ((b: boolean) => void)
export type FetchOptions<P, T> = {
  /** 接口参数 */
  params: P
  /** loading状态 */
  loading: FetchLoading
  /** 钩子 */
  hooks: Partial<FetchOptionHooks<P, T>>
  /**
   * 接口返回成功时, 是否自动弹出通知消息, 内容为接口返回的message
   * @description  默认返回成功提示, 设置为false可取消提示, 实际场景中绝大部分查询成功并不需要提示
   */
  autoNotify: boolean
}

export interface FetchOptionHooks<P, T> {
  before: (p: P) => any
  success: (response: T) => void
  error: (error: any) => void
  finally: () => void
}
