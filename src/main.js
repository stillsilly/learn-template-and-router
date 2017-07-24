import Vue from 'vue'
// 务必在加载 Vue 之后，立即同步设置以下内容
Vue.config.devtools = true
import App from './App.vue'
import router from './router'

new Vue({
  el: '#app',
   router,
  render: h => h(App)
})


