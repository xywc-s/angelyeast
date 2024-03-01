/**
 * 当前是否处于企业微信环境
 */
export function isWorkWechat() {
  return /wxwork/i.test(navigator.userAgent)
}
