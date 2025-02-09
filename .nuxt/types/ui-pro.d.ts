import * as uiPro from '#build/ui-pro'
import type { DeepPartial } from '#ui/types/utils'

type AppConfigUIPro = DeepPartial<typeof uiPro>

declare module '@nuxt/schema' {
  interface AppConfigInput {
    uiPro?: AppConfigUIPro
  }
}

export {}
