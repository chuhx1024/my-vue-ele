import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/page/home/HomePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    // 首页城市列表页
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    //  当前选择的城市页
    {
      path: '/city',
      name: 'city',
      component: () => import('@/page/city/CityPage')
    }
  ]
})
