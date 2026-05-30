import { withInstall } from '@pipit-ui/utils'

import Header from './src/header.vue'

export const PtHeader = withInstall(Header)
export default PtHeader

export type { HeaderProps } from './src/header'
