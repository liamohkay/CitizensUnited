const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/users')
    .get(controller.getUsers)
    .post(controller.postUsers)



module.exports = router;