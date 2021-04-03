const client = require('./index.js');

const helpers = {
  getUserInfo: (req, calback) => {
    let id = req.body.firebase_id;
    let queryStr = `SELECT * FROM users INNER JOIN tasks ON users.user_id = tasks.user_id WHERE firebase_id = ${id}`
    client.query(queryStr, (err, data) => {
      if (err) {
        callback(err)
      } else {
        callback(null, data)
      }
    })
  },
  postSignUp: (req, calback) => {
    let queryStr = `INSERT INTO users (firebase_id, first_name, last_name, address, phone_number, email, isVolunteer, rating) VALUES ('${req.body.firebase_id}', '${req.body.first_name}', '${req.body.last_name}', '${req.body.address}', ${req.body.phone_number}, '${req.body.email}', '${req.body.isVolunteer}', ${req.body.rating})`
    client.query(queryStr, (err, data) => {
      if (err) {
        callback(err)
      } else {
        callback(null, data)
      }
    })
  },
  postNewTask: (req, callback) =>  {
    let queryStr = `INSERT INTO tasks (task_date, task_status, task_body, task_location, start_time, end_time, user_id)
    VALUES (${req.body.task_date}, ${req.body.task_status}, '${task_body}', '${task_location}', '${req.body.start_time}', '${req.body.end_time}', ${req.body.user_id})`
    client.query(queryStr, (err, data) => {
      if (err) {
        callback(err)
      } else {
        callback(null, data)
      }
    })
  },
  acceptTask: (req, callback) => {
    let queryStr = `UPDATE tasks SET task_status='accepted' WHERE task_id=${req.params.id}`
    client.query(queryStr, (err, data) => {
      if (err) {
        callback(err)
      } else {
        callback(null, data)
      }
    })
  },
  hideTask: (req, callback) => {
    let queryStr = `UPDATE tasks SET task_status='hidden' WHERE task_id=${req.params.id}`
    client.query(queryStr, (err, data) => {
      if (err) {
        callback(err)
      } else {
        callback(null, data)
      }
    })
  },
  completeTask: (req, callback) => {
    let queryStr = `UPDATE tasks SET task_status='completed' WHERE task_id=${req.params.id}`
    client.query(queryStr, (err, data) => {
      if (err) {
        callback(err)
      } else {
        callback(null, data)
      }
    })
  }
}

module.exports = helpers;