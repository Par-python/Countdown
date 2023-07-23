const io = require('socket.io')(3000, {
    cors: {
      origin: "http://127.0.0.1:5500",
    },
  });

process.setMaxListeners(0);

const users = {}

io.on('connection', socket => {
    socket.on('new-user', userName =>{
        users[socket.id] = userName
        socket.broadcast.emit('user-connected', userName)
    })
    socket.on('send-chat-message', message => {
        socket.broadcast.emit('chat-message', message)
    })
})
