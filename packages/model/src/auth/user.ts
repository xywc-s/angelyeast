import { ExtractPropTypes } from 'vue'
import type { Pager, Sort } from '@angelyeast/types/request'

export const user = {
  code: {
    name: '用户编号',
    default: ''
  },
  departmentCode: {
    name: '部门编号',
    default: ''
  },
  departmentId: {
    name: '部门ID',
    default: ''
  },
  departmentName: {
    name: '部门名称',
    default: ''
  },
  email: {
    name: '邮箱',
    default: ''
  },
  id: {
    name: '用户ID',
    default: ''
  },
  name: {
    name: '用户名',
    default: ''
  },
  phone: {
    name: '电话',
    default: ''
  },
  qq: {
    name: 'QQ',
    default: ''
  },
  status: {
    name: '状态',
    default: ''
  },
  thumb_avatar: {
    name: '头像',
    default: ''
  },
  username: {
    name: 'UUID',
    default: ''
  },
  wechatId: {
    name: '微信ID',
    default: ''
  }
}

export type UserInfo = ExtractPropTypes<typeof user>
export type UserFuzzySearchParams = {
  /**
   * 模糊匹配关键字
   */
  data: string
}
export type UserListParams = Partial<Pager & Sort & UserFuzzySearchParams>

export interface User {
  avatar?: string
  code: string
  deleted: string
  dingTalkJson?: any
  email: string
  gender: string
  id: string
  insertDate: string
  json?: any
  loginDate: string
  name: string
  namePhoneticFull: string
  namePhoneticShort: string
  /** 企业微信id */
  outerId: string
  password?: any
  phone: string
  position: string
  qq?: any
  status: string
  updateDate: string
  username: string
  weChatJson: string
}
