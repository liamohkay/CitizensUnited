const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/citizens', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database is running')
});


const usersSchema = new Schema({
  // user_id SERIAL,
  firebase_id: {type: String, required: true, index: true},
  first_name: String,
  last_name: String,
  neighborhood: String,
  phone_number: String,
  email: String,
  isVolunteer: Boolean,
  thumbsUp: Number,
  thumbsDown: Number,
  photo: String,
  tasks: [],
})

const tasksSchema = new Schema({
  // task_id SERIAL,
  // user_id INT,
  volunteer_id: String,
  requestor_id: String,
  task_date: String,
  task_status: String, // Pending, Accepted, Hidden, Completed
  task_body: String,
  task_neighborhood: String,
  start_time: String,
  end_time: String,
})


// *** Need to determine schema
const roomsSchema = new Schema({
  volunteer_id: String,
  requester_id: String,
  message_body: String,
})

const Users = mongoose.model('Users', usersSchema);
const Tasks = mongoose.model('Tasks', tasksSchema);
const Messages = mongoose.model('Messages', roomsSchema);

module.exports = {
  Users,
  Tasks,
  Messages
}