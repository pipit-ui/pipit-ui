import { withInstall } from '@pipit-ui/utils'

import Table from './src/table.vue'

export const PtTable = withInstall(Table)
export default PtTable

export type { TableColumn, TableProps } from './src/table'
