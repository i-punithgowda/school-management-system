const app=require('express')();
const http = require('http').createServer(app);
const io=require('socket.io')(http);
const botName='Admin';
const formatMessage = require('./utils/msgs');
const {userJoin,getCurrentUser,userLeave,getRoomUsers} = require('./utils/users');


io.on('connection',socket=>{
console.log('user connected');
  socket.on('joinRoom',({username,room})=>{
    console.log(username +"joined " +room +" room")
    const user=userJoin(socket.id,username,room);
    socket.join(user.room);
    socket.emit('message',  formatMessage(botName,'Welcome to chat'));
    socket.broadcast.to(user.room).emit('message', formatMessage(botName,`${user.username} has joined the chat`));


    io.to(user.room).emit('roomUsers', {
      room:user.room,
      users:getRoomUsers(user.room)
    })
    
  })

socket.on('typing',({username,room})=>{
 socket.broadcast.to(room).emit('onTyping',`${username} is typing`)
})

  socket.on('chatMessage',msg=>{
    const user=getCurrentUser(socket.id);
    io.to(user.room).emit('message', formatMessage(user.username, msg));
  })

  socket.on('disconnect', () =>{
    const user=userLeave(socket.id);
    if(user){
      io.to(user.room).emit('message',formatMessage(botName,`${user.username} has left the chat`));
      

      io.to(user.room).emit('roomUsers', {
        room:user.room,
        users:getRoomUsers(user.room)
      })
    }
   
  })
 


})



http.listen(4000,()=>{
    console.log('listening to port 4000');
})