// Libraries + dependencies
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const router = require('./router.js');
const bodyparser = require('body-parser');
const port = 3000;

// Apply Middleware
const server = express();
server.use(morgan('dev'));
server.use(express.json());
server.use(cors());
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: true }));

// Serve up static files
server.use(express.static(path.join(__dirname, '../client/dist/')));
server.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

// Connect to router
server.use('/api', router);

server.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
