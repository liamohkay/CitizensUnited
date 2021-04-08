// Libraries + dependencies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Components
import Map from '../Map/Map'
import ChatRoom from '../Chat/ChatRoom'
import Logo from '../Home/Logo'

const TaskView = (props) => {
  const { mongoUser, ticket, room_id, isVolunteer, volunteerName } = props.location.state;
  var neighborhood = ticket.task_neighborhood
  const [partnerID, setPartnerID] = useState(
    !isVolunteer
      ? ticket.volunteer_id
      : ticket.requestor_id
  );
  console.log('ticket', ticket)

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

      <div id="task-view-main-container">

        <div id="task-view-info-title">
          <h3>{ isVolunteer ? ticket.task_status : `${ticket.volunteer_name} has accepted your task!` }</h3>
          <Link to={{ pathname: "/"}}>
              <button id="back-homepage-btn" type="button">Go back to Home Page</button>
            </Link>
          <Link to={{pathname: "/task/rating/:task_id", state: { ticket, isVolunteer }}}>
              <button id="task-complete-btn" type="button">Mark Task Complete</button>
          </Link>
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
        </div>

        <div id="task-view-volunteer">
          <span style={{ display: 'block' }}>
            <b>Requester:</b> {ticket.requestor_name}
          </span>
          <span style={{ display: 'block' }}>
            <b>Requester Score:</b>
            <i id="thumbs-up" className="far fa-thumbs-up fa-1x"></i>{ ticket.volunteer_thumbsUp }
            <i id="thumbs-down" className="far fa-thumbs-down fa-1x"></i> { ticket.volunteer_thumbsDown }
          </span>
        </div>

        <div id="task-view-requestor">
          <span style={{ display: 'block' }}>
            < b>Volunteer:</b> {ticket.volunteer_name}
          </span>
          <span style={{ display: 'block' }}>
            < b>Volunteer Score:</b>
            <i id="thumbs-up" className="far fa-thumbs-up fa-1x"></i>{ ticket.requestor_thumbsUp }
            <i id="thumbs-down" className="far fa-thumbs-down fa-1x"></i> { ticket.requestor_thumbsDown }
          </span>
        </div>

        <div id="task-view-map">
          <Map neighborhood={neighborhood}/>
        </div>

        <div id="task-view-chat">
          <ChatRoom mongoUser={mongoUser} room_id={room_id} />
        </div>

      </div>
    </div>
  );
}

export default TaskView;