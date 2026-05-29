import { makeInstaller } from '@pipit-ui/utils'
import { PtButton, PtIcon, PtTable } from '@pipit-ui/components'

import '@pipit-ui/theme-chalk/src/index.scss'

import type { Plugin } from 'vue'

export const installer = makeInstaller([
  PtButton,
  PtIcon,
  PtTable,
] as unknown as Plugin[])

export const install = installer.install

export const version = '0.0.1'

export * from '@pipit-ui/components'
export * from '@pipit-ui/constants'
export * from '@pipit-ui/directives'
export * from '@pipit-ui/hooks'
export * from '@pipit-ui/locale'
export * from '@pipit-ui/utils'

export default installer
