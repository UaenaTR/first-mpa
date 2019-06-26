import Vue from 'vue'
import PageOne from './PageOne.vue'
import Cube from 'cube-ui'

Vue.use(Cube)

Vue.config.productionTip = false

new Vue({
  render: h => h(PageOne),
}).$mount('#app')
