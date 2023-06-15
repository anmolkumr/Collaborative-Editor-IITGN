import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import cors from 'cors';
import ejs from 'ejs';


const app = express();
app.use(cors())
const server = createServer(app);
const io = new Server(server,{
    cors: {
        origin: "http://localhost:5000",
        methods: ["GET", "POST"],
        transports: ['websocket', 'polling'],
        credentials: true
    },
    allowEIO3: true
});

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
});

io.on("connection", function (socket) {

    socket.on("user_join", function (data) {
        this.username = data;
        socket.broadcast.emit("user_join", data);
    });

    socket.on("chat_message", function (data) {
        data.username = this.username;
        socket.broadcast.emit("chat_message", data);
    });

    socket.on("disconnect", function (data) {
        socket.broadcast.emit("user_leave", this.username);
    });
});


server.listen(5000, function () {
    console.log('listening on *:5000');
});