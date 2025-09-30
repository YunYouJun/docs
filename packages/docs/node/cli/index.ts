import process from 'node:process'
import prompts from 'prompts'

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

import { version } from '../../package.json'

const cli = yargs(hideBin(process.argv))
  .scriptName('docs')
  .usage('$0 [args]')
  .version(version)
  .alias('h', 'help')
  .alias('v', 'version')
  .command(
    'deps',
    '安装所需的依赖',
    args =>
      args
        .options('yes', {
          alias: 'y',
          type: 'boolean',
          description: 'Default to yes, do not prompt',
          default: false,
        }),
    async (argv) => {
      if (!argv.y) {
        const res = await prompts([
          {
            type: 'multiselect',
            name: 'deps',
            message: '选择要安装的依赖',
            choices: [
              { title: '@shikijs/vitepress-twoslash', value: '@shikijs/vitepress-twoslash' },
              { title: 'unocss', value: 'unocss' },
              { title: 'unplugin-vue-components', value: 'unplugin-vue-components' },
              { title: 'vite-plugin-vue-devtools', value: 'vite-plugin-vue-devtools' },
            ],
          },
        ])
        console.log(res)
      }
    },
  )
  .help()

export function run() {
  cli.parse()
}
