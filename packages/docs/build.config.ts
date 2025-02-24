import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  // If entries is not provided, will be automatically inferred from package.json
  entries: [
    // default
    './index',
    // mkdist builder transpiles file-to-file keeping original sources structure
    // {
    //   builder: 'mkdist',
    //   input: './client/components/',
    //   outDir: './dist/client/components',
    // },
  ],

  declaration: true,
})
