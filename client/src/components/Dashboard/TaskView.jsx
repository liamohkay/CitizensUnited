// Libraries + dependencies
import React, { useState, useEffect } from 'react';
// Components
import Map from '../Map/Map'
import ChatRoom from '../Chat/ChatRoom'

const TaskView = (props) => {
  const { ticket, room_id, isVolunteer } = props.location.state;
  console.log('ticket', ticket);
  return(
    <div className="task-view-container">
      {/* <Map /> */}
      <ChatRoom room_id={room_id} />
    </div>
  );
}

export default TaskView;