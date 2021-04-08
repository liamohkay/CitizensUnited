// Libraries + dependencies
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Form, Button, Modal } from 'react-bootstrap';

// Components
import RequestTile from './RequestTile';

const OldTasksView = () => {
  const { currentUser } = useAuth();
  const [oldTasks, setOldTasks] = useState();
  const [renderOld, setRenderOld] = useState(false);

  // Retrieves users completed tasks from database
  useEffect(() => {
    let params = { requestor_id: currentUser.uid }
    axios.get('/api/oldtasks', { params })
      .then(resp => setOldTasks(resp.data))
      .catch(err => console.log(err))
  }, [renderOld]);

  return (
    <div>
      { !oldTasks ? null : (
        oldTasks.map(ticket => <RequestTile ticket={ticket} old={true} setRenderOld={setRenderOld} />)
      )}
    </div>
  );
};

export default OldTasksView;