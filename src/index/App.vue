<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>首页</div>
    <router-view></router-view>
    <a class="first-page" href="pageOne.html">第一页</a>
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
      console.log(res)
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
  text-align: center;
  position: relative;
  height: 100%;

  .first-page{
    position: absolute;
    bottom: 200px;
    transform: translateX(-50%)
  }
}
</style>
