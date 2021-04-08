const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://54.177.82.68:80/citizens', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database is running')
});


const usersSchema = new Schema({
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
  volunteer_id: String,
  volunteer_name: String,
  volunteer_photo: String,
  volunteer_thumbsUp: Number,
  requestor_id: String,
  requestor_name: String,
  requestor_photo: String,
  requestor_thumbsUp: Number,
  task_date: String,
  task_status: String, // Pending, Accepted, Hidden, Completed
  task_body: String,
  task_neighborhood: String,
  start_time: String,
  end_time: String,
  room_id: String
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