// Libraries + dependencies
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
// Components
import AcceptBtn from './AcceptBtn'

const styles = {
  profile: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  }
}

const VolunteerTile = ({ ticket, setLoaded }) => {
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

  return (
    <div className="volunteer-ticket">
      <div className="volunteer-ticket__profile-img">
        {
          // currentUser && currentUser.photoURL
          //   ? <img src={currentUser.photoURL} />
          //   : <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOkHm3_mPQ5PPRvGtU6Si7FJg8DVDtZ47rw&usqp=CAU'} />

          <img src={requestor_photo} style={styles.profile} />
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
          Neighborhood: {task_neighborhood}
        </span>
        <span style={{ display: 'block' }}>
          Request Date/Time: {task_date}
        </span>
      </div>
      <div className="volunteer-ticket__buttons">
        <AcceptBtn ticket={ticket} task_id={_id} setLoaded={setLoaded} />
        <button value="Not Now"></button>
      </div>
    </div>
  )
}
export default VolunteerTile;