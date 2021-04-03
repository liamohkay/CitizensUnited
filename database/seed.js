const {Users, Tasks, Messages} = require('./index.js');

Users.insertMany([
  {
    firebase_id: '1',
    first_name: "Dirk",
    last_name: "Zhang",
    neighborhood: 'Santa Monica',
    phone_number: '123',
    email: 'dirk@gmail.com',
    isVolunteer: true,
    thumbsUp: 5,
    thumbsDown: 2,
    photo: 'www.photo.com',
  },
  {
    firebase_id: '2',
    first_name: "Meredith",
    last_name: "Roberts",
    neighborhood: 'Santa Monica',
    phone_number: '111',
    email: 'old@gmail.com',
    isVolunteer: false,
    thumbsUp: 1,
    thumbsDown: 0,
    photo: 'www.photo.com',
  },
  {
    firebase_id: '3',
    first_name: "Weilly",
    last_name: "Jordan",
    neighborhood: 'San Diego',
    phone_number: '123',
    email: 'sarah@gmail.com',
    isVolunteer: true,
    thumbsUp: 5,
    thumbsDown: 2,
    photo: 'www.photo.com',
  },
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
    task_neighborhood: 'Santa Monica',
    start_time: '7:30pm',
    end_time: '8:00pm',
  },
  {
    requestor_id: '2',
    task_date: '2021-04-03',
    task_status: 'Pending',
    task_body: 'Help me with groceries',
    task_neighborhood: 'Santa Monica',
    start_time: '7:30pm',
    end_time: '8:00pm',
  },
  {
    requestor_id: '2',
    task_date: '2021-04-03',
    task_status: 'Pending',
    task_body: 'Help me with groceries',
    task_neighborhood: 'San Diego',
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