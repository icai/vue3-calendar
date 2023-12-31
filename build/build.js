await import('./check-versions.js')

process.env.NODE_ENV = 'production'

import ora from 'ora';
import { rimrafSync } from 'rimraf';
import path from 'path';
import chalk from 'chalk';
import webpack from 'webpack';
import config from '../config/index.js';
import webpackConfig from './webpack.prod.conf.js';

const spinner = ora('building for production...');
spinner.start()
rimrafSync(path.join(config.build.assetsRoot, config.build.assetsSubDirectory))

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

  console.log(chalk.cyan('  Build complete.\n'))
  console.log(chalk.yellow(
    '  Tip: built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  ))
})
