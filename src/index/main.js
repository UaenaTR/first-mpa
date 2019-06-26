import Vue from 'vue'
import App from './App.vue'
import Cube from 'cube-ui'

import router from './router/router'

Vue.use(Cube)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
