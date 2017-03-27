// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mainx from './Main.vue'
import VueSocketio from 'vue-socket.io'
import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'

Vue.config.productionTip = false

Vue.use(VueSocketio, 'ws://localhost:3000')
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Mainx/>',
  components: { Mainx }
})
