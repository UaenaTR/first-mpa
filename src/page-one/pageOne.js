import Vue from 'vue'
import PageOne from './PageOne.vue'
import Cube from 'cube-ui'
import 'amfe-flexible'

import router from './router/router'

import '../assets/css/base.css'

Vue.use(Cube)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(PageOne),
}).$mount('#app')
