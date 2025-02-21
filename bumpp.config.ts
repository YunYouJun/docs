import { defineConfig } from 'bumpp'

const packages = [
  'docs',
]

export default defineConfig({
  files: [
    'package.json',
    'docs/package.json',
    ...packages.map(name => `packages/${name}/package.json`),
  ],
})
