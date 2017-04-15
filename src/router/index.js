import Vue from 'vue'
import Router from 'vue-router'
import Footer from '@/views/footBar'
import Header from '@/views/headBar'
import Navigation from '@/views/navBar'
import mapPage from '@/views/baidu'
import Index from '@/views/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      components: {
        navigation: Navigation,
        header: Header,
        mainPage: Index,
        footer: Footer
      }
    },
    {
      path: '/baidu',
      name: 'mapPage',
      components: {
        navigation: Navigation,
        header: Header,
        mainPage: mapPage,
        footer: Footer
      }
    },
    {
      path: '*',
      name: 'others',
      redirect: '/index'
    }
  ]
})
