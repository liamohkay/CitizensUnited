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
  .route('/tasks/volunteer')
    .get(controller.getVolunteerInfo)

router
  .route('/tasks/requester')
    .get(controller.getRequesterInfo)

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