const TerserPlugin = require('terser-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    //部署应用包时的基本 URL。
    publicPath: process.env.NODE_ENV === 'production' 
                ? '/first-mpa/'
                : '/',
    //生产环境构建文件的目录
    outputDir: 'dist',
    //生成静态资源的目录
    assetsDir: 'static',
    //文件名hash
    filenameHashing: true,
    //生产环境source map
    productionSourceMap: false,
    //配置多页面入口
    pages: {
        index: {
            //入口
            entry: './src/index/main.js',
            
            //模板
            template: './public/index/index.html',

            //打包输出
            filename: 'index.html',

            //
            title: '网站首页',

            //分块打包
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        pageOne: {
            entry: './src/page-one/pageOne.js',
            template: './public/page-one/pageOne.html',
            filename: 'pageOne.html',
            title: '第一页',
            chunks: ['chunk-vendors', 'chunk-common', 'pageOne']
        }
    },

    //webpack-merge合并
    configureWebpack: (config) => {
      if(isProduction){
        config.optimization.minimizer.push(
          new TerserPlugin({
            //是否过滤
            chunkFilter: (chunk) => {
              // Exclude uglification for the `vendor` chunk
              if (chunk.name === 'vendor') {
                return false;
              }
    
              return true;
            },
            //是否缓存
            cache: true,
            //是否多进程打包
            parallel: true,
            //提取注释
            extractComments: 'all'
          })
        )
      }
    },

    //修改原始webpack配置
    chainWebpack: (config) => {
      config.optimization.splitChunks({
        cacheGroups: {}
      })
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    },

    devServer: {
      hot: true, 
      host: '0.0.0.0',
      port: 8080,
      https: false,
      open: false,
      proxy: {
        '/api': {
          target: 'http://yapi.demo.qunar.com/mock/63710',
          changeOrigin: true,
          pathRewrite:{
            '^/api': '' 
          }
        },
      }
    },
}
