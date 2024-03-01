import { isIOS } from './isIOS'
import { isAndroid } from './isAndroid'
/**
 * 获取当前操作系统
 * 1: ios
 * 2: android
 * 3: 其它
 */
export function getOS() {
  if (isIOS()) {
    return 1
  }
  if (isAndroid()) {
    return 2
  }
  return 3
}
