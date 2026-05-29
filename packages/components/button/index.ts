import { withInstall } from '@pipit-ui/utils'

import Button from './src/button.vue'

export const PtButton = withInstall(Button)
export default PtButton

export type { ButtonProps, ButtonType, ButtonSize, NativeType } from './src/button'
