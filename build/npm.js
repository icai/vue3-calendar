await import('./check-versions.js')



import ora from 'ora'
import { rimrafSync } from 'rimraf'
import path from 'path'
import chalk from 'chalk'
import webpack from 'webpack'
import config from '../config/index.js'
import webpackConfig from './webpack.npm.conf.js'

process.env.NODE_ENV = 'production'


const spinner = ora('building for production...')
spinner.start()

rimrafSync(path.join(config.npm.assetsRoot))
webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  if (stats.hasErrors()) {
      console.log(stats);
    console.log(chalk.red('  Build failed with errors.\n'))
    process.exit(1)
  }
  console.log(chalk.cyan('  Build complete.\n'))
})
