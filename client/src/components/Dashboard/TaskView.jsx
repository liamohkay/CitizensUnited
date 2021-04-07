// Libraries + dependencies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Components
import Map from '../Map/Map'
import ChatRoom from '../Chat/ChatRoom'
import Logo from '../Home/Logo'

const TaskView = (props) => {
  const { ticket, room_id, isVolunteer, volunteerName } = props.location.state;
  var neighborhood = ticket.task_neighborhood
  const [partnerID, setPartnerID] = useState(
    !isVolunteer
      ? ticket.volunteer_id
      : ticket.requestor_id
  );

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
    <div id="task-view-container">
      <div id="task-view-header">
        <Logo />
          <div id="user-name" className="d-flex justify-content-end">
            {volunteerName}
          </div>
      </div>


      <div id="task-view-info-title">
        <h3>{ ticket.task_status }</h3>
      </div>
      <div id="task-view-info">
        <span style={{ display: 'block' }}>
            <b>Requestor:</b> {ticket.requestor_name}
        </span>
        <span style={{ display: 'block' }}>
          < b>Request:</b> {ticket.task_body}
        </span>
        <span style={{ display: 'block' }}>
          <b>Duration:</b> {Math.round((reformatDate(ticket.task_date, ticket.end_time) - reformatDate(ticket.task_date, ticket.start_time))) / 60000} minutes
        </span>
        <span style={{ display: 'block' }}>
          <b>Neighborhood:</b> {ticket.task_neighborhood}
        </span>
        <span style={{ display: 'block' }}>
          <b>Task Start:</b> {new Date(ticket.task_date).toUTCString()}
        </span>
        <Link to={{ pathname: "/"}}>
          <button type="button">Go back to Home Page</button>
        </Link>
        <Link to={{pathname: "/task/rating/:task_id", state: { ticket, isVolunteer }}}>
          <button>Mark Task Complete</button>
        </Link>
      </div>
      <ChatRoom room_id={room_id} />


      <div id="map-chat-container">
        <Map neighborhood={neighborhood}/>
      </div>



    </div>
  );
}

export default TaskView;