<!--
【功能描述】：
 -->
<template>
  <div>
    <ul>
      <li v-for="msg in msgs">{{msg}}</li>
    </ul>
    <input type="text" v-model="msg" />
    <button @click="goMsg" @keyup.13="goMsg">发送</button>
  </div>
</template>
<script type="text/babel">
  export default {
    data () {
      return {
        msgs: [],
        msg: ''
      }
    },
    created () {
      console.log(this.$socket)
      this.$socket.on('notice', (msg) => {
        debugger
        console.log(1111)
        this.msgs.push(msg.a)
      })
    },
    sockets: {
      notice (msg) {
        this.$notify({
          message: msg,
          type: 'success'
        })
      }
    },
    methods: {
      goMsg () {
        // this.msgs.push(this.msg)
        // this.$socket.emit('join', this.msg)
        this.$socket.emit('message', this.msg)
        this.msg = ''
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
