import type { RouteRecordName, RouteRecordRaw, RouteMeta, RouteComponent } from 'vue-router'
import type { Lazy } from '@angelyeast/types'
export type RawRouteComponent = RouteComponent | Lazy<RouteComponent>
export type MiddleRouteMeta = {
  /**
   * 子应用路由标题
   */
  title?: string
  /**
   * 子应用路由权限
   */
  permission?: string | string[]
  /**
   * 子应用路由是否移动端菜单可见
   */
  mobile?: boolean
  /**
   * svg图标名称
   */
  svg?: string
  /**
   * iconfont图标类名
   */
  icon?: string
  /**
   * 子应用路由类型: inner 内部应用, iframe形式加载, outer 外部应用, 新窗口打开
   */
  type?: 'inner' | 'outer'
  /**
   * 当前子应用路由是否可用
   */
  status?: boolean
}
export type CustomRoute = RouteRecordRaw & {
  /**
   * 选中状态: 同步该路由
   */
  checked?: boolean
  /**
   * 隐藏状态: 该路由不显示在菜单上
   */
  hidden?: boolean
  component?: string | null
  meta: RouteMeta & MiddleRouteMeta
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
