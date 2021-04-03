const dbHelpers = require('../database/dbHelpers.js');

const controller = {
  getUsers: (req, res) => {
    dbHelpers.getUserInfo(req, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  },

  postUsers: (req, res) => {
    dbHelpers.postSignUp(req, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send('Signed up a new user');
      }
    })
  },
}

module.exports = controller;