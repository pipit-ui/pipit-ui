import type { App, Plugin } from 'vue'
import { INSTALLED_KEY, type SFCWithInstall } from '../types'

export const withInstall = <T>(component: T, alias?: string): SFCWithInstall<T> => {
  ;(component as SFCWithInstall<T>).install = (app: App) => {
    const comp = component as any
    const name = comp.name || comp.__name

    if (name && !(app.config.globalProperties as any)[INSTALLED_KEY]) {
      app.component(name, component as any)
      if (alias) {
        app.component(alias, component as any)
      }
    }
  }
  return component as SFCWithInstall<T>
}

export const withInstallFunction = <T>(fn: T, name: string): SFCWithInstall<T> => {
  ;(fn as SFCWithInstall<T>).install = (app: App) => {
    if (!(app.config.globalProperties as any)[INSTALLED_KEY]) {
      ;(fn as any)._context = app._context
      app.config.globalProperties[name] = fn
    }
  }
  return fn as SFCWithInstall<T>
}

export const withNoopInstall = <T>(component: T): SFCWithInstall<T> => {
  ;(component as SFCWithInstall<T>).install = () => {}
  return component as SFCWithInstall<T>
}

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App) => {
    if ((app.config.globalProperties as any)[INSTALLED_KEY]) return

    ;(app.config.globalProperties as any)[INSTALLED_KEY] = true
    components.forEach((c) => app.use(c))
  }

  return {
    install,
  }
}
