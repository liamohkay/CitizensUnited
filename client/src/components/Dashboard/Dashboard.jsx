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
import Neighborhood from '../Neighborhood';

const Dashboard = ({ user }) => {
  // Gets current signed-in firebase user for displayName and photoURL props
  const { currentUser, logout } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [mongoUser, setMongoUser] = useState();
  const [loaded, setLoaded] = useState(true);
  const [neighborhood, setNeighborhood] = useState({
    neighborhood: '',
  });

  // Grabs mongo user on load and re-render & sets state for user & feed
  useEffect(() => getMongoUser(), [loaded]);
  useEffect(() => {
    if (mongoUser && mongoUser.isVolunteer) {
      getVolunteerTasks();
    }
  }, [neighborhood]);

  // Gets tasks volunteer neighborhood & saves them to state
  const getVolunteerTasks = (mongoUsr) => {
    let params = {
      firebase_id: currentUser.uid,
      task_neighborhood: neighborhood.neighborhood,
    }
    axios.get('/api/tasks/volunteer', { params })
      .then(resp => {
        setTasks(resp.data[0].tasks)
      })
      .catch(err => console.log(err))
  }

  // Get requester user tasks & saves them to state
  const getRequesterTasks = (mongoUsr) => {
    let options = { params: {firebase_id: mongoUsr.firebase_id} };
    axios.get('/api/tasks/requester', options)
      .then(resp => {
        setTasks(resp.data[0].tasks)
      })
      .catch(err => console.log(err))
  }

  // Finds related mongodb user using authorized currentUser uid (firebase_id)
  const getMongoUser = () => {
    let params = { firebase_id: currentUser.uid }
    axios.get('/api/users', { params })
      .then(resp => {
        let mongoUsr = resp.data[0];
        setMongoUser(mongoUsr);
        if (mongoUsr) {
          setNeighborhood({ neighborhood: mongoUsr.neighborhood });
        }

        // Get tasks based on user type
        if (mongoUsr) {
          if (mongoUsr.isVolunteer) {
            getVolunteerTasks(mongoUsr);
          } else {
            getRequesterTasks(mongoUsr);
          }
        }
      })
      .catch(err => console.log(err))

  }

  return (
    <>
      { !currentUser || !mongoUser ? null : (
        <div id="dashboard-container">
          { /* Header */ }
          <div className="dash-header-container">
            <Logo />
            <div id="user-welcome">
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

          { /* Change location for volunteer only */
            !mongoUser.isVolunteer
              ? null
              : (
                <div id="volunteer-neighborhood">
                  <Neighborhood
                    fields={neighborhood}
                    setFields={setNeighborhood}
                  />
                  <span id="current-neighborhood">Currently Selected: {neighborhood.neighborhood}</span>
                </div>
              )
          }

          { /* Tasks / tickets list */ }
          <div id="feed-container">
            { tasks.map(ticket => (
              mongoUser.isVolunteer
                ? <VolunteerTile
                    mongoUser={mongoUser}
                    ticket={ticket}
                    key={ticket._id}
                    volunteerName={currentUser.displayName}
                    setTasks={setTasks}
                    setLoaded={setLoaded}
                  />
                : <RequestTile
                    mongoUser={mongoUser}
                    ticket={ticket}
                    key={ticket._id}
                    setLoaded={setLoaded}
                  />
              ))
            }
          </div>

          { /* Add task modal for requesters only */
            mongoUser.isVolunteer
              ? null
              : <TaskModal
                  mongoUser={mongoUser}
                  currentUser={currentUser}
                  getRequesterTasks={getRequesterTasks}
                  mongoUser={mongoUser}
                />
          }

        </div>
      ) }
  </>
  );
}

export default Dashboard;