export {}
import type { App, ComponentCustomProperties } from 'vue'
import type { PermissionCodes, User } from '../auth'
import type { EventType, Handler, WildcardHandler } from 'mitt'
export interface MiddleStoreGetters {
  user: User
  language: string
  token?: string
  permissionList?: PermissionCodes
  serverTime: string
  [k: string]: any
}
export interface MiddleApp<Events extends Record<EventType, unknown>>
  extends App,
    ComponentCustomProperties,
    Record<string, unknown> {
  $store: {
    state: Record<string, any>
    getters: MiddleStoreGetters
    [k: string]: any
  }
  $updateTagTitle: (title: string, fullPath?: string) => void
  $eventHub: {
    $on<Key extends keyof Events>(type: Key, handler: Handler<Events[Key]>): void
    $on(type: '*', handler: WildcardHandler<Events>): void
    $off<Key extends keyof Events>(type: Key, handler?: Handler<Events[Key]>): void
    $off(type: '*', handler: WildcardHandler<Events>): void
    $emit<Key extends keyof Events>(type: Key, event: Events[Key]): void
    $emit<Key extends keyof Events>(type: undefined extends Events[Key] ? Key : never): void
  }
}
