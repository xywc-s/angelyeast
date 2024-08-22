import { computed } from 'vue'
import { useAppInstance } from './instance'
import type { Router, RouteLocationNormalizedLoaded } from 'vue-router'

export const useRoute = () => {
  const { app, isChildApp, mainApp } = useAppInstance()
  return computed<RouteLocationNormalizedLoaded>(() =>
    isChildApp.value ? mainApp.value.$route : app.value.config.globalProperties.$route
  )
}

export const useRouter = () => {
  const { app, isChildApp, mainApp } = useAppInstance()
  return computed<Router>(() =>
    isChildApp.value ? mainApp.value.$router : app.value.config.globalProperties.$router
  )
}
