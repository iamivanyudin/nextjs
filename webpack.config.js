/* eslint-env node */
const path = require('path')
const webpackBase = require('@crystal-ball/webpack-base')

/*
 * 📦 Single webpack configuration file handles different environment build targets
 * by using webpack-base to merge configurations common to all environments with
 * configurations unique to targeted environment.
 *
 * 📝 https://github.com/crystal-ball/webpack-base
 */
module.exports = () => {
  /*
   * Generate the base configuration object by passing the environment flags and
   * optional options object available for customizing the standard project
   * conventions.
   */
  const { configs } = webpackBase({
    paths: {
      appPublic: path.resolve('./src/media/static'),
      outputPath: path.resolve('./public'),
    },
    compressPlugin: false,
  })

  /*
   * Handle non-standard, advanced project customization by directly updating the
   * generated base configs.
   */
  // eg: configs.bail = false

  return configs
}
