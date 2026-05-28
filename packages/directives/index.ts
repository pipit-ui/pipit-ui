import type { App, Directive } from 'vue'

export const directives: Record<string, Directive> = {}

export const installDirectives = (app: App) => {
  Object.entries(directives).forEach(([name, directive]) => {
    app.directive(name, directive)
  })
}
