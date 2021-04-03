import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

const VolunteerTile = ({ ticket }) => {
  const { currentUser } = useAuth();
  const {
    task_date,
    task_status,
    task_body,
    task_location,
    requestor_name,
    start_time,
    end_time,
  } = ticket;

  return (
    <div className="volunteer-ticket">
      <div className="volunteer-ticket__profile-img">
        {
          currentUser && currentUser.photoURL
            ? <img src={currentUser.photoURL} />
            : <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOkHm3_mPQ5PPRvGtU6Si7FJg8DVDtZ47rw&usqp=CAU'} />
        }
      </div>
      <div className="volunteer-ticket__body">
        <span style={{ display: 'block' }}>
          Requestor: {requestor_name}
        </span>
        <span style={{ display: 'block' }}>
          Request: {task_body}
        </span>
        <span style={{ display: 'block' }}>
          Duration: {Math.round((new Date(task_date + 'T' + end_time) - new Date(task_date + 'T' + start_time)) / 60000)} minutes
        </span>
        <span style={{ display: 'block' }}>
          Neighborhood: {task_location}
        </span>
        <span style={{ display: 'block' }}>
          Request Date/Time: {task_date}
        </span>
      </div>
      <div className="volunteer-ticket__buttons">
        <button value="Accept"></button>
        <button value="Not Now"></button>
      </div>
    </div>
  )
}

export default VolunteerTile;