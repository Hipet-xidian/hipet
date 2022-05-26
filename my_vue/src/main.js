/*
  整个项目入口文件
*/
//引入Vue
import Vue from 'vue'
//引入App组件，所有组件的父组件
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
//引入css初始化
import './assets/css/base.css'
//引入js适配移动端
//import './assets/js/phone'
Vue.use(Vant)
Vue.config.productionTip = false

//创建Vue实例对象
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
