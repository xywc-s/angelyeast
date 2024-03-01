import { reactive } from 'vue'

/** 使用当前组件上的refs */
export const useRefs = <T extends object>() => {
  const refs = reactive<T>({} as T)
  const toRef = (refName: keyof T) => (el: any) => ((refs as T)[refName as keyof T] = el)

  return {
    refs,
    toRef
  }
}
