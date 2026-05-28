import type { App, Plugin } from 'vue'

export const INSTALLED_KEY = Symbol('INSTALLED_KEY')

export type SFCWithInstall<T> = T & Plugin
