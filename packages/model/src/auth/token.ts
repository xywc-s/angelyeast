import type { User } from './user'
import type { PermissionCode } from './permission'

export interface JWT extends Pick<User, 'id' | 'code' | 'email' | 'name' | 'phone' | 'username'> {
  permissionList: PermissionCode[]
  access_token: string
  refresh_token: string
  token_type: string
  scope: string
  expires_in: number
  jti: string
}

export interface Token
  extends Pick<User, 'id' | 'code' | 'email' | 'name' | 'phone'>,
    Pick<JWT, 'jti' | 'scope'> {
  client_id: string
  exp: number
  permissionList: PermissionCode[]
  tokenKey: string
}

export interface WechatJSON {
  name: string
  /** 部门id */
  department: number[]
  /** 职位 */
  position: string
  mobile: string
  gender: string
  email: string
  avatar: string
  status: number
  enable: number
  isleader: number
  extattr: Extattr
  hide_mobile: number
  english_name: string
  telephone: string
  order: number[]
  main_department: number
  qr_code: string
  alias: string
  is_leader_in_dept: number[]
  thumb_avatar: string
  biz_mail: string
  userid: string
  direct_leader: any[]
  code: string
}

interface Extattr {
  attrs: Attr[]
}

interface Attr {
  name: string
  value: string
  type: number
  text: Text
}

interface Text {
  value: string
}
