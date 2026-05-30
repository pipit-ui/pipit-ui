import { withInstall } from '@pipit-ui/utils'

import Container from './src/container.vue'

export const PtContainer = withInstall(Container)
export default PtContainer

export type { ContainerProps, ContainerDirection } from './src/container'
