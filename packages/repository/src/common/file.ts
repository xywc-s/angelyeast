import { set } from 'lodash-es'
import { encode } from 'js-base64'
import { isWorkWechat } from '../utils/isWorkWechat'
import { isMobile } from './breakpoint'
import { useNotify } from './notify'

/** 文件服务器配置 */
export const fileServer = {
  /** 服务器域名 */
  fileServerDomain: '',
  /** 文件预览域名 */
  filePreviewDomain: ''
}

/** 设置文件服务器配置 */
export const setFileServer = (options: typeof fileServer) => {
  set(fileServer, 'fileServerDomain', options.fileServerDomain)
  set(fileServer, 'filePreviewDomain', options.filePreviewDomain)
}

/**
 * 预览中台文件
 * @param url 文件地址
 */
export const previewFile = (url: string) => {
  if (!fileServer.filePreviewDomain || !fileServer.fileServerDomain) {
    const err = '文件服务器地址未配置, 请先配置文件服务器地址!'
    useNotify(err, 'error')
    throw new Error(err)
  }
  if (/^\/middle\/.*/.test(url)) url = fileServer.fileServerDomain + url
  // 如果是企业微信手机端预览文件则直接打开文件
  if (isWorkWechat() && isMobile()) {
    window.open(url)
  } else {
    const path =
      fileServer.filePreviewDomain +
      '/onlinePreview?url=' +
      encodeURIComponent(encode(url, true)) +
      '&officePreviewType=pdf'
    window.open(path)
  }
}
