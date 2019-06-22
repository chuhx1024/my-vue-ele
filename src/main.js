import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'
// import routes from './router'
import router from './router'
import '@/config/rem'
import '../static/font/iconfont.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
