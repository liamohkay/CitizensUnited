// Libraries + dependencies
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const router = require('./router.js');
const bodyparser = require('body-parser');
const port = 3000;

// Initialize express server + apply socket io config
const server = express();
const ioServer = require('http').createServer(server);
const io = require('socket.io')(ioServer)
  .of('/api/socket')
  .on('connection', socket => console.log('Socket.io: User connected'));

// Apply middleware to express server
server.use(morgan('dev'));
server.use(express.json());
server.use(cors());
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: true }));

// Serve up static files
server.use(express.static(path.join(__dirname, '../client/dist/')));

// Connect to router
server.use('/api', router);

ioServer.listen(port, () => console.log(`Listening on port: ${port}`));
