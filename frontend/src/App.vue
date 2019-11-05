<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
  },
  mounted() {
    Kakao.init("3fba1edc8e21309d5e9c3003264a2b71");
  },
  methods:{
    
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
