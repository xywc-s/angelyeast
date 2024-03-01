import { useClipboard } from '@vueuse/core'
import { ElMessage } from 'element-plus'

/** 复制内容 */
export function copyText(text: string, message?: string) {
  const { copy } = useClipboard()
  copy(text)
  ElMessage.success(message ?? '复制成功!')
}
