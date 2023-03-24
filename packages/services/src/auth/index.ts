import request from './request'
/**
 * 用户模块
 */
export * as User from './user'
export * as Permission from './permission'
export * as Department from './department'

/**
 * 企业微信登录验证
 * @param {string} data.code 企业微信登录code
 */
export const loginWithWeChatCode = (data: { code: string }) =>
  request.post('/authorization/workWeChatApplicationLoginMiddle', data)
