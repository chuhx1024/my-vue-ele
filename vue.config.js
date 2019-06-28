// vue.config.js
module.exports = {
  // lintOnSave: false,

  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  publicPath: '/',
  devServer: {
    port: 8083,
    proxy: {
      '/v1': {
        target: 'http://elm.cangdu.org:8001',
        changeOrigin: true,
        ws: true
      }
    }
  }
}
