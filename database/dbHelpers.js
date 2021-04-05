const {Users, Tasks, Messages} = require('./index.js');

const dbHelpers = {
  getUserInfo: (req, callback) => {
    Tasks
      .find({task_neighborhood: req.query.neighborhood}, (err, data) => {
        if (err) callback(err)
        Users
          .update({firebase_id: req.query.firebase_id}, {
            $set: {tasks: data}
          }, (err) => {
            if (err) callback(err)
            Users
              .find({firebase_id: req.query.firebase_id}, (err, updatedData) => {
                if (err) callback(err)
                callback(null, updatedData);
              })
          })
      })
  },

  postSignUp: (req, callback) => {
    Users
      .create(
        {
        firebase_id: req.body.firebase_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        neighborhood: req.body.neighborhood,
        phone_number: req.body.phone_number,
        email: req.body.email,
        isVolunteer: req.body.isVolunteer,
        thumbsUp: req.body.thumbsUp,
        thumbsDown: req.body.thumbsDown,
        photo: req.body.photo,
        tasks: [],

      }, (err, data) => {
        if (err) callback(err)
        callback(null, data)
      })
  },

  getAllTasks: (req, callback) => {
    Tasks
      .find({task_neighborhood: req.query.task_neighborhood}, (err, data) => {
        if (err) callback(err)
        callback(null, data)
      })
  },

  postNewTask: (req, callback) =>  {
    Tasks
      .create(
        {
        volunteer_id: req.body.volunteer_id,
        requestor_id: req.body.requestor_id,
        task_date: req.body.task_date,
        task_status: req.body.task_status,
        task_body: req.body.task_body,
        task_neighborhood: req.body.task_neighborhood,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
      }, (err, data) => {
        if (err) callback(err)
        Users
          .update({firebase_id: req.body.requestor_id}, {
            $push: {tasks: data._id}
          }, (err, data) => {
            if (err) callback(err)
            callback(null, data);
          })
      })
  },

  // after this status of task changed in task collection but doesn't update the status in users collection automatically, you will need to do a getUserInfo request again
  acceptTask: (req, callback) => {
    Tasks
      .update({_id: req.body.task_id}, {
        $set: {task_status: 'Accepted', volunteer_id: req.body.firebase_id}
      }, (err, data) => {
        if (err) callback(err)
        callback(null, data)
      })
  },

  hideTask: (req, callback) => {
    Users
      .find({firebase_id: req.body.firebase_id}, (err, data) => {
        if (err) callback(err)
        let oldArr =data[0].tasks;
        let newArr = oldArr.filter((obj) => {
          return obj._id.toString() !== req.body.task_id;
        });
        Users
          .update({firebase_id: req.body.firebase_id}, {
            $set: {tasks: newArr}
          }, (err) => {
            if (err) callback(err)
            Users
              .find({firebase_id: req.body.firebase_id}, (err, updatedData) => {
                if (err) callback(err)
                callback(null, updatedData);
              })
          })
      })
  },

  // after this status of task changed in task collection but doesn't update the status in users collection automatically, you will need to do a getUserInfo request again
  completeTask: (req, callback) => {
    Tasks
    .update({_id: req.body.task_id}, {
      $set: {task_status: 'Completed'}
    }, (err, data) => {
      if (err) callback(err)
      callback(null, data)
    })
  },

  thumbsUp: (req, callback) => {
    Users
      .findOneAndUpdate(
        { firebase_id: req.body.firebase_id},
        { $inc: {thumbsUp: 1} }
      )
  },

  thumbsDown: (req, callback) => {
    Users
      .findOneAndUpdate(
        { firebase_id: req.body.firebase_id},
        { $inc: {thumbsDown: 1} }
      )
  }
}

module.exports = dbHelpers;
