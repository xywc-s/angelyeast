/**
 * 当前是否处于微信环境
 */
export function isWechat() {
  return /micromessenger/i.test(navigator.userAgent)
}
