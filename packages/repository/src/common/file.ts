import { useBase64 } from '@vueuse/core'
import { isWorkWechat } from '../utils'
import { fileServer } from '../config'
import { isMobile } from './breakpoint'
import { useNotify } from './notify'

/**
 * 预览中台文件
 * @param url 文件地址
 */
export const previewFile = (url: string) => {
  if (!fileServer.filePreviewDomain || !fileServer.fileServerDomain)
    return useNotify('文件服务器地址未配置, 请先配置文件服务器地址!')
  if (/^\/middle\/.*/.test(url)) url = fileServer.fileServerDomain + url
  // 如果是企业微信手机端预览文件则直接打开文件
  if (isWorkWechat() && isMobile()) {
    window.open(url)
  } else {
    const { base64 } = useBase64(url)
    const path =
      fileServer.filePreviewDomain +
      '/onlinePreview?url=' +
      encodeURIComponent(base64.value) +
      '&officePreviewType=pdf'
    window.open(path)
  }
}
