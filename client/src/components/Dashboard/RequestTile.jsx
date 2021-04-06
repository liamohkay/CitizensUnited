import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const RequestTile = ({ ticket }) => {
  const { currentUser } = useAuth();
  const {
    _id,
    task_date,
    task_status,
    task_body,
    task_neighborhood,
    requestor_name,
    requestor_photo,
    start_time,
    end_time,
    room_id
  } = ticket;

  const styles = {
    profile: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    }
  }

  console.log(ticket);

  return (
    <div className="requestor-ticket">
      <div className="requestor-ticket__profile-img">
        <img src={requestor_photo} style={styles.profile} />
      </div>
      <div className="requestor-ticket__body">
        <span style={{ display: 'block' }}>
          Requestor: {requestor_name}
        </span>
        <span style={{ display: 'block' }}>
          Request: {task_body}
        </span>
        <span style={{ display: 'block' }}>
          Duration: {Math.round((new Date(task_date + 'T' + end_time) - new Date(task_date + 'T' + start_time))) / 60000} minutes
        </span>
        <span style={{ display: 'block' }}>
          Neighborhood: {task_neighborhood}
        </span>
        <span style={{ display: 'block' }}>
          Request Date/Time: {task_date}
        </span>
      </div>
      <div className="requestor-ticket__buttons">
        <span id="volunteer-button" className="btn btn-sm" style={{ cursor: "default" }}>{task_status}</span>
      </div>
    </div>
  );
}

export default RequestTile;