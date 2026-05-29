import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

const rootDir = resolve(__dirname, '..', '..')
const pkgDir = (name: string) => resolve(rootDir, 'packages', name)

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@pipit-ui/components': pkgDir('components/index.ts'),
      '@pipit-ui/constants': pkgDir('constants/index.ts'),
      '@pipit-ui/directives': pkgDir('directives/index.ts'),
      '@pipit-ui/hooks': pkgDir('hooks/index.ts'),
      '@pipit-ui/locale': pkgDir('locale/index.ts'),
      '@pipit-ui/utils': pkgDir('utils/index.ts'),
      '@pipit-ui/theme-chalk': pkgDir('theme-chalk'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'PipitUI',
      formats: ['es', 'umd'],
      fileName: (format) => `pipit-ui.${format === 'es' ? 'mjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: 'named',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'index.css'
          return assetInfo.name || 'assets/[name].[ext]'
        },
      },
    },
  },
})
