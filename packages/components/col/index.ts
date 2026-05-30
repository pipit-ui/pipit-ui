import { withInstall } from '@pipit-ui/utils'

import Col from './src/col.vue'

export const PtCol = withInstall(Col)
export default PtCol

export type { ColProps, ColSize, ColSizeObject } from './src/col'
