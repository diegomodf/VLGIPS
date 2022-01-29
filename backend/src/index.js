/*const express = require('express');
const routes = require('./routes');
const path = require('path');

const app = express();
//const server = require('http').createServer(app);
const io = require('socket.io')(3000);

app.use(express.static(path.join(__dirname, '../../frontend/public')));
app.set('views', path.join(__dirname, '../../frontend/public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req, res) =>{
    res.render('index.html');
});

//app.use()
//app.use('/api', routes)

let messages = []

io.on('connection', socket => {
    console.log(`Socket conectado: ${socket.id}`);

    socket.emit('previousMessages', messages);

    socket.on('sendMessage', data => {
        console.log(data);
        messages.push(data);
        socket.broadcast.emit('receivedMessage', data);
    });
});

//server.listen(3000);
app.listen(3000);*/

const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
//
app.use(express.static(path.join(__dirname, '../../frontend/public')));
app.set('views', path.join(__dirname, '../../frontend/public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req, res) =>{
    res.render('index.html');
});
//
app.use('/api', routes);

let messages = []

io.on('connection', socket => {
    console.log(`Socket conectado: ${socket.id}`);

    socket.emit('previousMessages', messages);

    socket.on('sendMessage', data => {
        console.log(data);
        messages.push(data);
        socket.broadcast.emit('receivedMessage', data);
    });
});

server.listen(3000);