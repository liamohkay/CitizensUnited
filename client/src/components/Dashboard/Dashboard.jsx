// Libraries + dependencies
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext';
// Components
import RequestTile from './RequestTile';
import VolunteerTile from './VolunteerTile';
import Logo from '../Home/Logo';
import TaskModal from './TaskModal';

const Dashboard = ({ user }) => {
  // Gets current signed-in firebase user for displayName and photoURL props
  const { currentUser, logout } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [mongoUser, setMongoUser] = useState();
  const [loaded, setLoaded] = useState(true);

  // Grabs mongo user on load and re-render & sets state for user & feed
  useEffect(() => getMongoUser(), [loaded]);

  // Gets tasks volunteer neighborhood & saves them to state
  const getVolunteerTasks = (mongoUsr) => {
    let params = { task_neighborhood: mongoUsr.neighborhood }
    axios.get('/api/tasks', { params })
      .catch(err => console.log(err))
      .then(resp => setTasks(resp.data))
  }

  // Get requester user tasks & saves them to state
  const getRequesterTasks = (mongoUsr) => {
    let params = { firebase_id: mongoUsr.firebase_id  }
    axios.get('/api/tasks/requester', { params })
      .catch(err => console.log(err))
      .then(resp => setTasks(resp.data[0].tasks))
  }

  // Finds related mongodb user using authorized currentUser uid (firebase_id)
  const getMongoUser = () => {
    let params = { firebase_id: currentUser.uid }
    axios.get('/api/users', { params })
      .catch(err => console.log(err))
      .then(resp => {
        let mongoUsr = resp.data[0];
        setMongoUser(mongoUsr);

        // Get tasks based on user type
        if (mongoUsr.isVolunteer) {
          getVolunteerTasks(mongoUsr);
        } else {
          getRequesterTasks(mongoUsr);
        }
      })
  }

  return (
    <>
      { !currentUser || !mongoUser ? null : (
        <div id="dashboard-container">

          { /* Header */ }
          <div className="d-flex justify-content-between align-items-center">
            <Logo />
            <div className="d-flex justify-content-between align-items-center">
              <img
                src={mongoUser.photo}
                style={{ width: '50px', height: '50px', borderRadius: '100%'}}
              />
              <span>Welcome {currentUser.displayName}!</span>
              <button className="btn btn-secondary" onClick={() => logout()}>
                Log Out
              </button>
            </div>
          </div>

          { /* Tasks / tickets list */ }
          <div id="feed-container">
            { tasks.map(ticket => (
              mongoUser.isVolunteer
                ? <VolunteerTile ticket={ticket} setLoaded={setLoaded} volunteerName={currentUser.displayName} key={ticket._id} />
                : <RequestTile ticket={ticket} setLoaded={setLoaded} key={ticket._id} />
            )) }
          </div>

          { /* Add task modal for requesters only */ }
          { mongoUser.isVolunteer ? null : <TaskModal currentUser={currentUser} /> }

        </div>
      ) }
  </>
  );
}

export default Dashboard;