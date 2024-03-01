import Components from './component'
import type { App, Plugin } from 'vue'
const INSTALLED_KEY = Symbol('INSTALLED_KEY')
const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App, options?: any) => {
    if (app[INSTALLED_KEY]) return

    app[INSTALLED_KEY] = true
    components.forEach((c) => app.use(c))

    // if (options) provideGlobalConfig(options, app, true)
  }

  return {
    install
  }
}
export default makeInstaller([...Components])
