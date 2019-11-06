module.exports = {
    devServer: {
      proxy: {
        '/api': {
          // target: 'http://52.78.224.61:3000/',
          target: 'http://localhost:3000/',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        },
      }
    },
    outputDir: '../backend/public',
  }
