import type { Plugin } from 'vue'

import { PtAside } from '@pipit-ui/components/aside'
import { PtButton } from '@pipit-ui/components/button'
import { PtCol } from '@pipit-ui/components/col'
import { PtContainer } from '@pipit-ui/components/container'
import { PtFooter } from '@pipit-ui/components/footer'
import { PtHeader } from '@pipit-ui/components/header'
import { PtIcon } from '@pipit-ui/components/icon'
import { PtMain } from '@pipit-ui/components/main'
import { PtRow } from '@pipit-ui/components/row'
import { PtTable } from '@pipit-ui/components/table'

export default [PtAside, PtButton, PtCol, PtContainer, PtFooter, PtHeader, PtIcon, PtMain, PtRow, PtTable] as unknown as Plugin[]
