import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'pipit-ui': resolve(__dirname, '../packages/pipit-ui/index.ts'),
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
