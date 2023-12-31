// https://github.com/shelljs/shelljs

await import('shelljs/global.js')
env.NODE_ENV = 'production'
import path from 'path';
import config from '../config/index.js';
import ora from 'ora';
import webpack from 'webpack';
import webpackConfig from './webpack.doc.conf.js';


console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(config.doc.assetsRoot, config.doc.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/*', assetsPath)
touch(config.doc.assetsRoot + '/.nojekyll')

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
