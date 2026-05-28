import { rollup } from 'rollup'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import nodeResolve from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const packageDir = resolve(__dirname, '..')
const pkgRoot = resolve(packageDir, '..')
const rootDir = resolve(pkgRoot, '..')
const entryFile = resolve(pkgRoot, 'es-entry.ts')

async function buildModule(format, outDir, ext) {
  const bundle = await rollup({
    input: entryFile,
    external: ['vue'],
    plugins: [
      nodeResolve({
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.mjs'],
        rootDir,
      }),
      esbuild({
        target: 'es2020',
        sourceMap: false,
      }),
      vue(),
      vueJsx(),
    ],
  })

  await bundle.write({
    format,
    dir: resolve(packageDir, outDir),
    preserveModules: true,
    preserveModulesRoot: pkgRoot,
    entryFileNames: `[name].${ext}`,
    chunkFileNames: `[name].${ext}`,
    exports: format === 'cjs' ? 'named' : undefined,
  })

  await bundle.close()
  console.log(`Built ${format} modules to ${outDir}`)
}

await buildModule('es', 'dist/es', 'mjs')
await buildModule('cjs', 'dist/lib', 'js')
