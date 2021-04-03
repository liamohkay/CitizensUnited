const {Users, Tasks, Messages} = require('./index.js');

Users.insertMany([
  {
    firebase_id: '1',
    first_name: "Dirk",
    last_name: "Zhang",
    neighborhood: '123 State St.',
    phone_number: '123',
    email: 'dirk@gmail.com',
    isVolunteer: true,
    thumbsUp: 5,
    thumbsDown: 2,
    photo: 'www.photo.com',
    tasks: ['2'],
  },
  {
    firebase_id: '2',
    first_name: "Meredith",
    last_name: "Roberts",
    neighborhood: '123 Old St.',
    phone_number: '111',
    email: 'old@gmail.com',
    isVolunteer: false,
    thumbsUp: 1,
    thumbsDown: 0,
    photo: 'www.photo.com',
    tasks: ['1', '2'],
  }
])
.then(() => {
  console.log('Users inserted');
})
.catch((error) => {
  console.log(error);
})

Tasks.insertMany([
  {
    volunteer_id: '1',
    requestor_id: '2',
    task_date: '2021-04-03',
    task_status: 'Accepted',
    task_body: 'Help me with groceries',
    task_location: 'Santa Monica',
    start_time: '7:30pm',
    end_time: '8:00pm',
  }
])
.then(() => {
  console.log('Tasks inserted');
})
.catch((error) => {
  console.log(error);
})