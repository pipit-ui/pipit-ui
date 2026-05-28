import { cp, writeFile } from 'node:fs/promises'
import { resolve, dirname, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import * as sass from 'sass-embedded'

const __dirname = dirname(fileURLToPath(import.meta.url))
const src = resolve(__dirname, '../../theme-chalk/src')
const dest = resolve(__dirname, '../dist/theme-chalk')
const entries = ['index.scss', 'button.scss', 'icon.scss']

await cp(src, dest, { recursive: true })
console.log('Theme SCSS files copied to dist/theme-chalk')

for (const entry of entries) {
  const entryPath = resolve(dest, entry)
  const cssPath = entryPath.replace(/\.scss$/, '.css')

  try {
    const result = sass.compile(entryPath)
    await writeFile(cssPath, result.css)
    const rel = relative(dest, entry)
    console.log(`  Compiled: ${rel} -> ${relative(dest, cssPath)}`)
  } catch (err) {
    console.error(`  Failed to compile ${entry}: ${err.message}`)
  }
}

console.log('Theme CSS files compiled')
