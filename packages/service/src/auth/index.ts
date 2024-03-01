import { AngelResponse } from '@angelyeast/types'
import { usePost } from './request'
/** 用户模块 */
export * as User from './user'
export * as Permission from './permission'
export * as Department from './department'

/** 开发环境登录 */
export const loginForDev = (data: {
  /** 员工编号 */
  code: string
  /** 环境token */
  token: string
}) =>
  usePost(`/authorization/userCodeLogin?userCode=${data.code}`, null, {
    serveAuth: false,
    headers: {
      authorization: data.token
    }
  })

/** 企业微信登录验证 */
export const loginWithWeChatCode = (data: {
  /** 企业微信登录code */
  code: string
}) =>
  usePost<AngelResponse<any, string>>('/authorization/workWeChatApplicationLoginMiddle', data, {
    serveAuth: false
  })
