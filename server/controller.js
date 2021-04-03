const dbHelpers = require('../database/dbHelpers.js');

const controller = {
  getUserInfo: (req, res) => {
    dbHelpers.getUserInfo(req, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  },

  postSignUp: (req, res) => {
    dbHelpers.postSignUp(req, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send('Signed up a new user');
      }
    })
  },

  getAllTasks: (req, res) => {
    dbHelpers.getAllTasks(req, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  },

  postNewTask: (req, res) => {
    dbHelpers.postNewTask(req, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  },

  acceptTask: (req, res) => {
    dbHelpers.acceptTask(req, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  },

  hideTask: (req, res) => {
    dbHelpers.hideTask(req, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  },

  completeTask: (req, res) => {
    dbHelpers.completeTask(req, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  },
}

module.exports = controller;