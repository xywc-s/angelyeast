import { set } from 'lodash-es'

/**
 * 文件服务器配置
 */
export const fileServer = {
  /**
   * 服务器域名
   */
  fileServerDomain: '',
  /**
   * 文件预览域名
   */
  filePreviewDomain: ''
}

/**
 * 设置文件服务器配置
 */
export const setFileServer = (options: typeof fileServer) => {
  set(fileServer, 'fileServerDomain', options.fileServerDomain)
  set(fileServer, 'filePreviewDomain', options.filePreviewDomain)
}
