// Libraries + dependencies
import React, { useState, useEffect } from 'react';
// Components
import Map from '../Map/Map'
import ChatRoom from '../Chat/ChatRoom'
import { Link } from 'react-router-dom';
import Logo from '../Home/Logo'

const TaskView = (props) => {
  console.log('props TaskView', props);
  const { ticket, room_id, isVolunteer } = props.location.state;
  var neighborhood = ticket.task_neighborhood
  return(
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
          Duration: {Math.round((new Date(ticket.task_date + 'T' + ticket.end_time) - new Date(ticket.task_date + 'T' + ticket.start_time)) / 60000)} minutes
        </span>
        <span style={{ display: 'block' }}>
          Neighborhood: {ticket.task_neighborhood}
        </span>
        <span style={{ display: 'block' }}>
          Request Date/Time: {ticket.task_date}
        </span>
      </div>
    </div>
  );
}

export default TaskView;