// Libraries + dependencies
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

// Components
import RequestTile from './RequestTile';

const styles = {
  profile: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  }
}

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

const OldTasksView = () => {
  const { currentUser } = useAuth();
  const [oldTasks, setOldTasks] = useState();

  // Retrieves users completed tasks from database
  useEffect(() => {
    axios.get('/api/tasks', { firebase_id: currentUser.uid })
      .then(resp => setOldTasks(resp.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      { !oldTasks ? null : (
        oldTasks.map(ticket => <RequestTile ticket={ticket} old={true} />)
      )}
    </div>
  );
};

export default OldTasksView;