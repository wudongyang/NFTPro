import Vue from 'vue'
import Router from 'vue-router'

// 首页
import admin_sys_banner from '@/views/admin/system/banner.vue' 


// 第三方登录
import login from '@/views/other/login.vue' // 登录页
import thirdParty from '@/views/other/thirdParty.vue' // 第三方登录


import notFound from '@/views/other/404.vue'

// 防加载本页报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/elementFang/',
  scrollBehavior(to, form, savedPostion) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      name: 'index',
      path: '/',
      redirect: { name: 'login' },
    }, {
      name: 'login',
      path: '/login',
      component: login
    }, {
      name: 'thirdParty',
      path: '/thirdParty',
      component: thirdParty
    }, {
      name: 'admin',
      path: '/admin',
      redirect: { name: 'admin_sys_banner' },
      children: [
       {
          name: 'admin_sys_banner',
          path: 'sys/banner',
          component: admin_sys_banner
        },
      ]
    }, {
      name: 'notFound',
      path: '/404',
      component: notFound
    }
  ]
})
// 登录判断
// router.beforeEach((to, from, next) => {
//   if (to.name == 'login') {
//     next()
//   } 
//   else if (to.name == 'thirdParty') {
//     next()
//   }
//   else {
//     if (sessionStorage.getItem('userInfo')) {
//       next()
//     } else {
//       router.replace({ name: 'login' })
//     }
//     // next()
//   }
// })

export default router