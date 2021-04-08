// Libraries + dependencies
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const OldTasksView = () => {
  const { currentUser } = useAuth();
  const [oldTasks, setOldTasks] = useState();

  // Retrieves users completed tasks from database
  useEffect(() => {
    axios.get('/api/oldtasks', { firebase_id: currentUser.uid })
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      HI
    </div>
  );
};

export default OldTasksView;