const {Users, Tasks, Messages} = require('./index.js');

const dbHelpers = {
  getUserInfo: (req, callback) => {
    console.log(req.query.firebase_id);
    Users
      .find({firebase_id: req.query.firebase_id}, (err, data) => {
        if (err) callback(err)
        callback(null, data)
      })
  },

  postSignUp: (req, callback) => {
    Users
      .create(
        {
        firebase_id: req.body.firebase_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address: req.body.address,
        phone_number: req.body.phone_number,
        email: req.body.email,
        isVolunteer: req.body.isVolunteer,
        thumbsUp: req.body.thumbsUp,
        thumbsDown: req.body.thumbsDown,
        photo: req.body.photo,
        tasks: []
      }, (err, data) => {
        if (err) callback(err)
        callback(null, data)
      })
  },

  postNewTask: (req, callback) =>  {

  },
  acceptTask: (req, callback) => {

  },
  hideTask: (req, callback) => {

  },
  completeTask: (req, callback) => {

  }
}

module.exports = dbHelpers;
