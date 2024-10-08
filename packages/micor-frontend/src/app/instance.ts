import { MiddleApp } from '@angelyeast/model'
import type { EventType } from 'mitt'
import { App, computed, ref } from 'vue'

export const useAppInstance = <Events extends Record<EventType, unknown> = any>() => {
  /** 当前环境, 应用是否正在作为子应用运行 */
  const isChildApp = ref(Boolean(parent !== self))

  /** 当前应用实例 */
  const app = computed(() => window.app as App)

  /** 主应用实例 */
  const mainApp = computed(() => parent.app as MiddleApp<Events>)

  return {
    /** 当前环境, 应用是否正在作为子应用运行 */
    isChildApp,
    /** 当前应用实例 */
    app,
    /** 主应用实例 */
    mainApp
  }
}
