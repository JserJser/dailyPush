// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.css'
import 'styles/border.css'
import fastClick from 'fastclick'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

// 1像素边框
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})