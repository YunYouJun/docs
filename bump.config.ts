import { defineConfig } from 'bumpp'

const packages = [
  'docs',
]

export default defineConfig({
  all: true,
  files: [
    'package.json',
    'docs/package.json',
    ...packages.map(name => `packages/${name}/package.json`),
  ],
  execute: 'npm run changelog',
})
