#!/usr/bin/env node

/**
 * Release script for Pipit UI
 * 
 * Usage:
 *   node scripts/release.mjs [version]
 * 
 * Examples:
 *   node scripts/release.mjs patch    # 0.0.1 -> 0.0.2
 *   node scripts/release.mjs minor    # 0.0.1 -> 0.1.0
 *   node scripts/release.mjs major    # 0.0.1 -> 1.0.0
 *   node scripts/release.mjs 1.2.3    # Set specific version
 */

import { readFileSync, writeFileSync } from 'fs'
import { execSync } from 'child_process'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')

const packages = [
  'packages/pipit-ui',
  'packages/components',
  'packages/hooks',
  'packages/utils',
  'packages/constants',
  'packages/directives',
  'packages/locale',
  'packages/theme-chalk',
]

function getCurrentVersion() {
  const pkg = JSON.parse(readFileSync(resolve(rootDir, 'packages/pipit-ui/package.json'), 'utf-8'))
  return pkg.version
}

function bumpVersion(version, type) {
  const [major, minor, patch] = version.split('.').map(Number)
  switch (type) {
    case 'major': return `${major + 1}.0.0`
    case 'minor': return `${major}.${minor + 1}.0`
    case 'patch': return `${major}.${minor}.${patch + 1}`
    default: return type
  }
}

function validateVersion(version) {
  return /^\d+\.\d+\.\d+$/.test(version)
}

function updatePackageVersion(pkgPath, version) {
  const pkgJsonPath = resolve(rootDir, pkgPath, 'package.json')
  const pkg = JSON.parse(readFileSync(pkgJsonPath, 'utf-8'))
  pkg.version = version
  writeFileSync(pkgJsonPath, JSON.stringify(pkg, null, 2) + '\n')
  console.log(`  Updated ${pkg.name} to ${version}`)
}

function updateWorkspaceDeps(version) {
  for (const pkgPath of packages) {
    const pkgJsonPath = resolve(rootDir, pkgPath, 'package.json')
    const pkg = JSON.parse(readFileSync(pkgJsonPath, 'utf-8'))
    
    let updated = false
    for (const depType of ['dependencies', 'devDependencies', 'peerDependencies']) {
      if (pkg[depType]) {
        for (const [dep, ver] of Object.entries(pkg[depType])) {
          if (ver === 'workspace:*' && dep.startsWith('@pipit-ui/')) {
            pkg[depType][dep] = version
            updated = true
          }
        }
      }
    }
    
    if (updated) {
      writeFileSync(pkgJsonPath, JSON.stringify(pkg, null, 2) + '\n')
    }
  }
}

async function main() {
  const args = process.argv.slice(2)
  const versionArg = args[0] || 'patch'
  
  const currentVersion = getCurrentVersion()
  const newVersion = bumpVersion(currentVersion, versionArg)
  
  if (!validateVersion(newVersion)) {
    console.error(`Invalid version: ${newVersion}`)
    process.exit(1)
  }

  console.log(`\nReleasing Pipit UI v${newVersion} (current: v${currentVersion})\n`)

  // Confirm
  const readline = await import('readline')
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
  const answer = await new Promise(resolve => {
    rl.question('Continue? (y/N) ', resolve)
  })
  rl.close()

  if (answer.toLowerCase() !== 'y') {
    console.log('Release cancelled.')
    process.exit(0)
  }

  // Update versions
  console.log('\nUpdating package versions...')
  for (const pkgPath of packages) {
    updatePackageVersion(pkgPath, newVersion)
  }

  // Update workspace dependencies
  console.log('\nUpdating workspace dependencies...')
  updateWorkspaceDeps(newVersion)

  // Update CHANGELOG.md
  console.log('\nUpdating CHANGELOG.md...')
  const changelogPath = resolve(rootDir, 'CHANGELOG.md')
  const changelog = readFileSync(changelogPath, 'utf-8')
  const today = new Date().toISOString().split('T')[0]
  const newEntry = `## [${newVersion}] - ${today}\n\n### Added\n\n- Release v${newVersion}\n\n`
  const updatedChangelog = changelog.replace(
    '## [Unreleased]\n',
    `## [Unreleased]\n\n${newEntry}`
  )
  writeFileSync(changelogPath, updatedChangelog)

  // Git operations
  console.log('\nCreating git commit and tag...')
  execSync('git add -A', { cwd: rootDir, stdio: 'inherit' })
  execSync(`git commit -m "release: v${newVersion}"`, { cwd: rootDir, stdio: 'inherit' })
  execSync(`git tag -a v${newVersion} -m "v${newVersion}"`, { cwd: rootDir, stdio: 'inherit' })

  console.log(`\n✓ Release v${newVersion} prepared!`)
  console.log('\nNext steps:')
  console.log('  1. Review the changes: git log --oneline -2')
  console.log('  2. Push to GitHub:     git push && git push --tags')
  console.log('  3. The GitHub Action will automatically publish to npm')
  console.log('\nOr publish manually:')
  console.log('  pnpm build && pnpm -C packages/pipit-ui publish --access public')
}

main().catch(console.error)
