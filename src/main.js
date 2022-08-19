import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { config } from '@/libs/config.js'
Vue.prototype.$config = config;

// 引入样式
import 'babel-polyfill'
import '../static/font/iconfont.css'
import '../static/fonts/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'
// UI组件
Vue.config.productionTip = false
import element from 'element-ui'
Vue.use(element)

import '@/assets/css/public.css'

// ECharts图表
window.echarts = require('echarts')
Vue.prototype.$echarts = echarts

// 拖拽
import VueDND from 'awe-dnd'
Vue.use(VueDND)

// MD5加密
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;

// 非对称加密
import JsEncrypt from 'jsencrypt'
var JES = new JsEncrypt()
JES.setPublicKey(config.jsencrypt)
Vue.prototype.$JSE = JES

// 语音播报
import { msgSound } from '@/libs/public.js'
Vue.prototype.$MsgSound = msgSound

// 全局提示
import { Message } from 'element-ui'
Vue.prototype.$Message = Message

// 富文本编辑器


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})