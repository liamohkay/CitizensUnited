import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Ticket = (props) => {
  const { currentUser } = useAuth();
  const [posts, setPosts] = useState(sampleFeed);
  const {
    task_date,
    task_status,
    task_body,
    task_location,
    photoURL,
    requestor_name,
    start_time,
    end_time,
  } = props;

  return (
    <div className="volunteer-ticket">
      <div className="volunteer-ticket__profile-img">
        {photoURL}
      </div>
      <div className="volunteer-ticket__body">
        Requestor: {requestor_name}
        Request: {task_body}
        Duration: {(new Date(task_date + 'T' + end_time) - new Date(task_date + 'T' + start_time)) / 60000} minutes
        Neighborhood: {task_location}
        Request Date/Time: {task_date}
      </div>
    </div>
  )
}

export default Ticket;