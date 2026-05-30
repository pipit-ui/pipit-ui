import { withInstall } from '@pipit-ui/utils'

import Row from './src/row.vue'

export const PtRow = withInstall(Row)
export default PtRow

export type { RowProps, RowJustify, RowAlign } from './src/row'
export { ROW_INJECTION_KEY } from './src/row'
