export {}
import type { App, ComponentCustomProperties } from 'vue'
import type { PermissionCodes, JWT } from '../auth'
export interface MiddleStoreGetters {
  user: JWT
  language: string
  token?: string
  permissionList?: PermissionCodes
  serverTime: string
  [k: string]: any
}
export interface MiddleApp extends App, ComponentCustomProperties, Record<string, unknown> {
  $store: {
    state: Record<string, any>
    getters: MiddleStoreGetters
    [k: string]: any
  }
  $updateTagTitle: (title: string, fullPath?: string) => void
}
