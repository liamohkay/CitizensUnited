// Libraries + dependencies
import React, { useState, useEffect } from 'react';
// Components
import Map from '../Map/Map'
import ChatRoom from '../Chat/ChatRoom'
import { Link } from 'react-router-dom';

const TaskView = (props) => {
  console.log('props TaskView', props);
  const { ticket, room_id, isVolunteer } = props.location.state;
  var neighborhood = ticket.task_neighborhood
  return(
    <div className="task-view-container">
      <Map neighborhood={neighborhood}/>
      <ChatRoom room_id={room_id} />
      <Link to={{ pathname: "/"}}>
        <button type="button">Go back to Home Page</button>
      </Link>
    </div>
  );
}

export default TaskView;