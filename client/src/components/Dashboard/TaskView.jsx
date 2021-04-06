// Libraries + dependencies
import React, { useState, useEffect } from 'react';
// Components
import Map from '../Map/Map'
import ChatRoom from '../Chat/ChatRoom'
import { Link } from 'react-router-dom';
import Logo from '../Home/Logo'

const TaskView = (props) => {
  console.log('props TaskView', props);
  const { ticket, room_id, isVolunteer, volunteerName } = props.location.state;
  var neighborhood = ticket.task_neighborhood
  // console.log('volunteerName', volunteerName)

  const reformatDate = (dateStr, time) => {
    const pad = (num) => (
      num.toString().length < 2
        ? ('0' + num)
        : (num)
    )
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = pad(date.getMonth());
    const day = pad(date.getUTCDate());
    const newDateStr = `${year}-${month}-${day}T${time}`;
    return new Date(newDateStr);
  }

  return (
    <div className="task-view-container">
      <div>
        <Logo />
          <div id="user-name" className="d-flex justify-content-end">
            {volunteerName}
          </div>
      </div>
      <span style={{ display: 'block' }}>
          <h2>
            {ticket.task_status}
            </h2>
        </span>
      <div id="map"> </div>
      <Map neighborhood={neighborhood}/>
      <ChatRoom room_id={room_id} />
      <Link to={{ pathname: "/"}}>
        <button type="button">Go back to Home Page</button>
      </Link>
      <div id="task-info">
        <span style={{ display: 'block' }}>
          Requestor: {ticket.requestor_name}
        </span>
        <span style={{ display: 'block' }}>
          Request: {ticket.task_body}
        </span>
        <span style={{ display: 'block' }}>
          Duration: {Math.round((reformatDate(ticket.task_date, ticket.end_time) - reformatDate(ticket.task_date, ticket.start_time))) / 60000} minutes
        </span>
        <span style={{ display: 'block' }}>
          Neighborhood: {ticket.task_neighborhood}
        </span>
        <span style={{ display: 'block' }}>
          Request Date/Time: {new Date(ticket.task_date).toUTCString()}
        </span>
      </div>
    </div>
  );
}

export default TaskView;