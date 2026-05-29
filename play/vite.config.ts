import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const packagesDir = resolve(__dirname, '../packages')

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'pipit-ui': resolve(packagesDir, 'pipit-ui/index.ts'),
      '@pipit-ui/components': resolve(packagesDir, 'components/index.ts'),
      '@pipit-ui/constants': resolve(packagesDir, 'constants/index.ts'),
      '@pipit-ui/directives': resolve(packagesDir, 'directives/index.ts'),
      '@pipit-ui/hooks': resolve(packagesDir, 'hooks/index.ts'),
      '@pipit-ui/locale': resolve(packagesDir, 'locale/index.ts'),
      '@pipit-ui/utils': resolve(packagesDir, 'utils/index.ts'),
      '@pipit-ui/theme-chalk': resolve(packagesDir, 'theme-chalk'),
    },
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
  optimizeDeps: {
    exclude: [
      'pipit-ui',
      '@pipit-ui/components',
      '@pipit-ui/constants',
      '@pipit-ui/directives',
      '@pipit-ui/hooks',
      '@pipit-ui/locale',
      '@pipit-ui/utils',
      '@pipit-ui/theme-chalk',
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
})
