<template>
  <div id="app">
    首页
    <img alt="Vue logo" src="../assets/logo.png">
    <router-view></router-view>
    <a href="pageOne.html">第一页</a>
  </div>
</template>

<script>

import request from '../utils/request'

export default {
  name: 'app',
  components: {
  },
  data(){
    return {

    }
  },
  created() {
    this.testRequest()
  },
  methods: {
    async testRequest(){
      const res = await request.get('api/test')
      // console.log(res)
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
