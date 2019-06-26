module.exports = {
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
    }
}
