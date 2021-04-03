const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/users')
    .get(controller.getUsers)
    .post(controller.postUsers)

router
  .route('/tasks')
    .get(controller.getTasks)
    .post(controller.postTasks)

router
  .route('/tasks/accepted')
    .put(controller.acceptTask)

router
  .route('/tasks/hidden')
    .put(controller.hideTask)


module.exports = router;