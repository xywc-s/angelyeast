import type { RouteRecordName, RouteRecordRaw, RouteMeta, RouteComponent } from 'vue-router'
import type { Lazy, CustomeRouteMeta, CustomRoute } from '@angelyeast/types'
export type RawRouteComponent = RouteComponent | Lazy<RouteComponent>
export type CustomRoute = RouteRecordRaw &
  CustomRoute & {
    component?: string | null
    meta: RouteMeta & CustomeRouteMeta
    children: CustomRoute[]
  }
export type RouteSyncProps = {
  /** 应用名称 */
  name: string
  /**
   * 应用路径(以/开头的基础公共路径)
   * @example /app
   */
  path: string
  /** 待同步的所有路由对象 */
  routes: CustomRoute[]
  /** 需要排除的路由name[] */
  exclude: RouteRecordName[]
}
