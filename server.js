var app = require('express')()
var server = require('http').Server(app)

var io = require('socket.io')(server)

server.listen(3000)

// app.get('/', function(request, response) {
//   response.send('heel.')
// })
var i = 0
var notice
io.on('connection', function(socket) {
  console.log('客户端已连接。。。')
  socket.on('join', function(user) {
    console.log(user)
  })
  socket.on('message', function(msg) {
    console.log(msg)
    // io.emit('chat', '我是服务器')
    socket.emit('notice', { a: '我是服务器'+msg });
    // socket.send('message', '我是服务器'+msg)
  })
  // socket.on('chat', function(msg) {
  //   io.emit('chat', '我是服务器')
  // })

  notice = setInterval(() => {
    i++
    //console.log(`第${i}次推送`)
    socket.broadcast.emit('notice', `我是服务器推送的消息${i}`)
  }, 5000)

  socket.on('disconnect', function () {
    clearInterval(notice);
  });
})