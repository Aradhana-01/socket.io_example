const app= require("express")();
// import express from 'express'; + const app = express();

const server = require("http").createServer(app);
// creating a server , without using express

const io = require( "socket.io" )(server, {
    cors: {
        origin: "*"
      }
});

//whenever the connection between the client and server will get established this connection event will get triggered
io.on("connection", (socket) =>{
    console.log("what is socket :" , socket);
    console.log("Socket is active to be connected ");

    socket.on("chat", (payload) => {
        console.log("what is payload " , payload);
        io.emit("chat", payload); //sending the data back to all clients that are connected 
    })
})


server.listen(5000 , () => {
    console.log("server listening.....");
})