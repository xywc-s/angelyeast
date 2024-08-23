import { computed, type ComputedRef } from 'vue'
import { useStorage } from '@vueuse/core'
import { useAppInstance } from './instance'
import type { SystemLanguage } from '@angelyeast/types'

const languageStorage = useStorage('language', navigator.language)

function isLanguage(lang: string, language: ComputedRef<string>) {
  if (language.value.length >= lang.length) {
    return language.value.toLowerCase().indexOf(lang.toLowerCase()) > -1
  } else {
    return lang.toLowerCase().indexOf(language.value.toLowerCase()) > -1
  }
}

function setLanguage(lang: SystemLanguage) {
  languageStorage.value = lang
}

export const useLanguage = () => {
  const { isChildApp, mainApp } = useAppInstance()

  const language = computed(() =>
    isChildApp.value ? mainApp.value.$store.getters.language : languageStorage.value
  )

  return {
    /** 当前系统语言 */
    language,
    /**
     * 断言当前语言环境
     * @param lang 断言的语言值
     * @example 'zh-CN','zh','en'...
     */
    isLanguage: (lang: string) => isLanguage(lang, language),
    /** 修改全局语言 */
    setLanguage
  }
}
