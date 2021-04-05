const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/users')
    .get(controller.getVolunteerInfo)
    .post(controller.postSignUp)

router
  .route('/users/requester')
    .get(controller.getRequesterInfo)

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


module.exports = router;