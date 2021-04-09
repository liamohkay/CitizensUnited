// Libraries + dependencies
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const router = require('./router.js');
const bodyparser = require('body-parser');
const port = 3000;

// Apply Middleware
const server = express()
  .use(morgan('dev'))
  .use(express.json())
  .use(cors())
  .use(bodyparser.json())
  .use(bodyparser.urlencoded({ extended: true }))
  .use('/api', router)

// Set up web sockets
const ioServer = require('http').createServer(server);
const io = require('socket.io')(ioServer);
io.of('/api/socket')
  .on('connection', (socket) => {
    console.log('Socket.io: User connected: ', socket.id);
    socket.on('disconnect', () => console.log('Socket.io: User disconnected: ', socket.id))
  })

// Serve up static files
server.use(express.static(path.join(__dirname, '../client/dist/')));

// Connect to router
server.listen(port, () => console.log(`Listening on port: ${port}`));
