<template>
  <div id="app">
      <cube-button @click='skipIndex'>返回首页</cube-button>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'pageOne',
  components: {
  },
  data(){
    return {

    }
  },
  methods: {
    skipIndex(){
      window.location.href = '/'
    }
  },
}
</script>

<style lang="scss">
#app {
  text-align: center;

 .back-btn{
   width: 200px;
   height: 100px;
   background-color: red;
 }
}
</style>
