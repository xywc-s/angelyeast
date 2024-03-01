/**
 * 通过url下载文件
 * @param url 文件url地址
 * @param fileName 完整文件名, 如: a.pdf
 */
export function downloadFileByUrl(url: string, fileName?: string) {
  fetch(url, {
    headers: {
      responseType: 'blob'
    }
  })
    .then((res) => {
      if (!fileName) {
        const file = parseFileName(res)
        fileName = `${file.fileName}${file.suffix}`
      }
      return res.blob()
    })
    .then((blob) => downloadFileByBlob(blob, fileName as string))
}

/**
 * 通过Blob数据下载文件
 * @param data Blob类型数据
 * @param fileName 完整文件名, 如: a.pdf
 */
// eslint-disable-next-line no-undef
export function downloadFileByBlob(data: BlobPart, fileName: string) {
  const blob = new Blob([data])
  const url = window.URL.createObjectURL(blob)
  download(url, fileName)
  window.URL.revokeObjectURL(url)
}

/**
 * 下载文件
 * @param url 文件url地址
 * @param fileName 完整文件名, 如: a.pdf
 */
export function download(url: string, fileName: string) {
  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  link.setAttribute('download', fileName)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/**
 * 从请求响应解析文件名和扩展名
 * @param response 请求响应
 */
export function parseFileName(response: Response) {
  const str = response.headers.get('content-disposition')
  if (!response || !str)
    throw new Error('文件名称解析错误, 响应数据有误或者响应头不存在"content-disposition"属性')
  let suffix = ''
  let fileName = ''
  // 截取文件名和文件类型
  if (str.lastIndexOf('.')) {
    fileName = decodeURI(str.substring(str.indexOf('=') + 1, str.lastIndexOf('.')))
    suffix = str.substring(str.lastIndexOf('.'), str.length)
  }
  return {
    fileName,
    suffix
  }
}
