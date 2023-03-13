import { useClipboard } from '@vueuse/core'
import { ElMessage } from 'element-plus'

const { copy } = useClipboard()

/**
 * 复制内容
 */
export function copyText(text: string, message?: string) {
  copy(text)
  ElMessage.success(message ?? '复制成功!')
}
