// Libraries + dependencies
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const router = require('./router.js');
const bodyparser = require('body-parser');
const port = 3000;

// Initialize express server + apply middleware
const server = express()
  .use(morgan('dev'))
  .use(express.json())
  .use(cors())
  .use(bodyparser.json())
  .use(bodyparser.urlencoded({ extended: true }))
  .use('/api', router)

// Set up websockets connection on server
const ioServer = require('http').createServer(server);
const io = require('socket.io')(ioServer).of('/api/socket');
  // .on('connection', socket => console.log('Socket.io: User connected'));
io.on('connection', socket => {
  socket.on('change', () => {
    io.emit('newTask');
  })
});


// Serve up static files
server.use(express.static(path.join(__dirname, '../client/dist/')));

// server.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// });


module.exports = ioServer;
// Connect to router
ioServer.listen(port, () => console.log(`Listening on port: ${port}`));
