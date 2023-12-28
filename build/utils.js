import path from "path";
import config from "../config/index.js";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const assetsPath = function(_path) {
  const assetsSubDirectory =
    process.env.NODE_ENV === "production"
      ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory;
  return path.posix.join(assetsSubDirectory, _path);
};

export const cssLoaders = function(options, minimize) {
  options = options || {};
  // if (typeof minimize === "undefined") {
  //   minimize = process.env.NODE_ENV === "production";
  // }
  const cssLoader = {
    loader: "css-loader",
    options: {
      // minimize: minimize,
      sourceMap: options.sourceMap
    }
  };

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    const loaders = [cssLoader];
    if (loader) {
      loaders.push({
        loader: loader + "-loader",
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      });
    }


    if (options.extract) {
      return [ "vue-style-loader", MiniCssExtractPlugin.loader].concat(loaders);
    } else {
      return ["vue-style-loader"].concat(loaders);
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders("less"),
    sass: generateLoaders("sass", { indentedSyntax: true }),
    scss: generateLoaders("sass"),
    stylus: generateLoaders("stylus"),
    styl: generateLoaders("stylus")
  };
};

// Generate loaders for standalone style files (outside of .vue)
export const styleLoaders = function(options, minimize) {
  const output = [];
  const loaders = cssLoaders(options, minimize);
  for (const extension in loaders) {
    const loader = loaders[extension];
    output.push({
      test: new RegExp("\\." + extension + "$"),
      use: loader
    });
  }
  return output;
};
