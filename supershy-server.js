const io = require('socket.io')(3000, {
    cors: {
      origin: "http://127.0.0.1:5500",
    },
  });

process.setMaxListeners(0);

io.on('connection', socket => {
    socket.emit('chat-message', 'Hello World')
})
