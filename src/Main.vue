<template>
  <div id="app">
    <Websocket></Websocket>
  </div>
</template>

<script>
import Websocket from './components/websocket.vue'

export default {
  name: 'mainx',
  components: {
    Websocket
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
