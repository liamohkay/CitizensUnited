import React, { useState, useEffect } from 'react';
import RequestTile from './RequestTile';

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
  let user = { isVolunteer: true }; // This is just sample so we can bool check for tiles

  // Grab ticket feed on load & re-render
  // useEffect(() => {
  //   setTicketFeed(sampleFeed);
  // }, [])

  return (
    <div id="list-container">
      { ticketFeed.map(ticket => (
        !user.isVolunteer ? null /*volunteer tile */ : <RequestTile ticket={ticket}/>
      )) }
    </div>
  );
}

export default TileList;