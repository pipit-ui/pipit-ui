import { rollup } from 'rollup'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import nodeResolve from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
// __dirname = packages/pipit-ui/scripts
// 需要向上三级到达项目根目录
const rootDir = resolve(__dirname, '..', '..', '..')
const packagesDir = resolve(rootDir, 'packages')

console.log('Root dir:', rootDir)
console.log('Packages dir:', packagesDir)

// 需要独立发包的子包列表
const packages = [
  'components',
  'constants',
  'directives',
  'hooks',
  'locale',
  'utils',
]

async function buildPackage(packageName, format, ext) {
  const packageDir = resolve(packagesDir, packageName)
  const entryFile = resolve(packageDir, 'index.ts')
  const outDir = resolve(packageDir, 'dist', format === 'es' ? 'es' : 'lib')

  const bundle = await rollup({
    input: entryFile,
    external: ['vue', /^@pipit-ui\//],
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
    dir: outDir,
    preserveModules: true,
    preserveModulesRoot: packageDir,
    entryFileNames: `[name].${ext}`,
    chunkFileNames: `[name].${ext}`,
    exports: format === 'cjs' ? 'named' : undefined,
  })

  await bundle.close()
  console.log(`Built ${packageName} (${format}) to dist/${format === 'es' ? 'es' : 'lib'}`)
}

async function buildPackageTypes(packageName) {
  const packageDir = resolve(packagesDir, packageName)
  const outDir = resolve(packageDir, 'dist', 'es')

  // 使用 tsc 生成类型声明文件
  const { execSync } = await import('node:child_process')
  try {
    execSync(
      `tsc --project tsconfig.json --emitDeclarationOnly --outDir "${outDir}"`,
      { cwd: packageDir, stdio: 'inherit' }
    )
    console.log(`Built ${packageName} types to dist/es`)
  } catch (_err) {
    console.warn(`Warning: Failed to build types for ${packageName}, skipping...`)
  }
}

// 构建所有子包
for (const pkg of packages) {
  await buildPackage(pkg, 'es', 'mjs')
  await buildPackage(pkg, 'cjs', 'js')
  await buildPackageTypes(pkg)
}

console.log('All packages built successfully')
