import { defineBuildConfig } from 'unbuild'

import pkg from './package.json'

const includeDeps: string[] = []

export default defineBuildConfig({
  // If entries is not provided, will be automatically inferred from package.json
  entries: [
    // common utils
    './utils/index',

    // node
    './node/index',

    // types
    './types/index',

    // mkdist builder transpiles file-to-file keeping original sources structure
    // {
    //   builder: 'mkdist',
    //   input: './client/components/',
    //   outDir: './dist/client/components',
    // },
  ],

  declaration: true,
  externals: [
    ...Object.keys(pkg.devDependencies || {}).filter(id => !includeDeps.includes(id)),

    'unocss/vite',
    'unplugin-vue-components/vite',
    '@shikijs/vitepress-twoslash/cache-fs',
  ],
})
