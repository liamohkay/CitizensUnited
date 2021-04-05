const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/users')
    .get(controller.getUserInfo)
    .post(controller.postSignUp)

router
  .route('/tasks')
    .get(controller.getAllTasks)
    .post(controller.postNewTask)

router
  .route('/tasks/accepted')
    .put(controller.acceptTask)

router
  .route('/tasks/hidden')
    .put(controller.hideTask)

router
  .route('/tasks/completed')
    .put(controller.completeTask)

router
  .route('/ratings/thumbsUp')
    .put(controller.thumbsUp)

router
  .route('/ratings/thumbsDown')
    .put(controller.thumbsDown)

module.exports = router;