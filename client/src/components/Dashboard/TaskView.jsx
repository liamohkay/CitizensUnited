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

  const dateOptions = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
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
            <b>Duration:</b> {ticket.duration} minutes
          </span>
          <span style={{ display: 'block' }}>
            <b>Neighborhood:</b> {ticket.task_neighborhood}
          </span>
          <span style={{ display: 'block' }}>
            <b>Task Start:</b> {new Date(ticket.start_time).toLocaleString('en-US', dateOptions)}
          </span>
        </div>

        <div id="task-view-volunteer">
          <span style={{ display: 'block' }}>
            <b>Requester:</b> {ticket.requestor_name}
          </span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <b>Requester Score:</b> &nbsp;
            <i className="far fa-thumbs-up fa-1x"></i> &nbsp;
            <span>{ ticket.volunteer_thumbsUp } </span> &nbsp;&nbsp;&nbsp;
            <i className="far fa-thumbs-down fa-1x"></i> &nbsp;
            <span> { ticket.volunteer_thumbsDown } </span>
          </div>
        </div>

        <div id="task-view-requestor">
          <span style={{ display: 'block' }}>
            < b>Volunteer:</b> {ticket.volunteer_name}
          </span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            < b>Volunteer Score:</b> &nbsp;
            <i className="far fa-thumbs-up fa-1x"></i> &nbsp;
            <span> { ticket.requestor_thumbsUp } </span> &nbsp;&nbsp;&nbsp;
            <i className="far fa-thumbs-down fa-1x"></i> &nbsp;
            <span> { ticket.requestor_thumbsDown } </span>
          </div>
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