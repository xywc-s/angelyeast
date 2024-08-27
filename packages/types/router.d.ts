import type { SystemLanguage } from './system'

export type TitleWithLanguage = Record<SystemLanguage, string>
export type CustomeRouteMeta = {
  /** 标题 */
  title?: string | TitleWithLanguage
  /** 内部应用还是外部应用: inner 内部应用, iframe形式加载, outer 外部应用, 新窗口打开 */
  type?: 'inner' | 'outer'
  /** 是否启用当前路由 */
  status?: boolean
  /** 是否隐藏菜单 */
  hidden?: boolean
  /** 移动端是否可见 */
  mobile?: boolean
  /** svg图标的name */
  svg?: string
  /** 字符图标集中定义的class名字 */
  icon?: string
  /** 当前路由配置的权限 */
  permission?: string | string[]
  /** 当前路由是否为白名单路由(跳过鉴权,无需登录,开放访问) */
  whiteList?: boolean
}

export type CustomRoute = {
  /** 选中状态: 同步该路由 */
  checked?: boolean
  /** 隐藏状态: 该路由不显示在菜单上 */
  hidden?: boolean
}
