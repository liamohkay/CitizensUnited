import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import axios from 'axios';
import RequestTile from './RequestTile';
import VolunteerTile from './VolunteerTile';

const sampleFeed = [
  {
    task_id: 1,
    task_date: '2021-04-02',
    task_status: 'Completed',
    task_body: 'Help, I\'ve fallen and I can\'t get up!',
    task_location: 'Los Angeles, CA',
    volunteer_name: 'Leslie Knope',
    requestor_name: 'Meredith Burns',
    start_time: '19:05:50-07:00',
    end_time: '20:00:00-08:00',
  },
  {
    task_id: 2,
    task_date: '2021-04-03',
    task_status: 'In Progress',
    task_body: 'My flowers need watering.',
    task_location: 'Los Angeles, CA',
    volunteer_name: 'April Ludgate',
    requestor_name: 'Meredith Burns',
    start_time: '20:00:00-08:00',
    end_time: '21:00:00-09:00',
  },
  {
    task_id: 3,
    task_date: '2021-04-04',
    task_status: 'Pending',
    task_body: 'My tea needs bagging.',
    task_location: 'Los Angeles, CA',
    volunteer_name: 'Nick Offerman',
    requestor_name: 'Meredith Burns',
    start_time: '16:00:00-04:00',
    end_time: '17:00:00-05:00',
  },
  {
    task_id: 4,
    task_date: '2021-04-05',
    task_status: 'Pending',
    task_body: 'I cannot find my cat Jones',
    task_location: 'Los Angeles, CA',
    volunteer_name: 'Andy Dwyer',
    requestor_name: 'Meredith Burns',
    start_time: '16:00:00-04:00',
    end_time: '17:00:00-05:00',
  },
  {
    task_id: 5,
    task_date: '2021-04-05',
    task_status: 'Pending',
    task_body: 'My glasses, I can\'t see without my glasses.',
    task_location: 'Los Angeles, CA',
    volunteer_name: 'Ann Perkins',
    requestor_name: 'Meredith Burns',
    start_time: '17:00:00-05:00',
    end_time: '18:00:00-06:00',
  },
];

const TileList = () => {
  const [ticketFeed, setTicketFeed] = useState(sampleFeed);

  // Gets current signed-in user for displayName and photoURL props
  const { currentUser, logout } = useAuth();

  let user = { isVolunteer: true }; // This is just sample so we can bool check for tiles

  // Grab ticket feed on load & re-render
  useEffect(() => {
    getTasks();
  }, [currentUser])

  const getTasks = () => {
    axios.get('/tasks')
    .then((results) => (setTicketFeed(results.data)))
    .catch((err) => (console.log(err)))
  }

  const logOut = () => {
    logout()
  }

  if (currentUser) {
    return (
      <div id="list-container">
        <div className="dash-welcome">
          <span>Welcome {currentUser.displayName}!</span>
        </div>
        <div className="dash-ticketfeed">
          {
            ticketFeed.map(ticket => (
              !user.isVolunteer
                ? <VolunteerTile key={ticket.task_id} ticket={ticket} />
                : <RequestTile key={ticket.task_id} ticket={ticket}/>
            ))
          }
        </div>
        <button onClick={logOut}>Log Out</button>
      </div>
    );
  } else {
    return (
      <span>No logged in user.</span>
    );
  }
}

export default TileList;