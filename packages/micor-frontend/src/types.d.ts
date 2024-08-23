/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />
import type { MiddleApp } from '@angelyeast/model'
import type { App } from 'vue'

declare global {
  interface Window {
    app: App | MiddleApp
  }
}
