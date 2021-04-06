import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import RequestTile from './RequestTile';
import VolunteerTile from './VolunteerTile';
import Logo from '../Home/Logo';
import TaskModal from './TaskModal';
import sampleFeed from './sampleFeed';

const TileList = ({ user }) => {
  const [ticketFeed, setTicketFeed] = useState([]);
  const [volunteer, setVolunteer] = useState('')

  // Gets current signed-in user for displayName and photoURL props
  const { currentUser, logout } = useAuth()

  // Grab ticket feed on load & re-render
  useEffect(() => {
    getUser()
  }, [])

  const getUser = () => {
    const options = {
      params: {
        firebase_id: currentUser.uid
      }
    }
    return (
      axios.get('/api/users', options)
        .then((results) => {
          setVolunteer(results.data[0].isVolunteer)
          return (results.data[0])
        })
        .then((userData) => {
          if (userData.isVolunteer === true) {
            axios.get('/api/tasks', {params: { task_neighborhood: userData.neighborhood}})
              .then((results) => {
                setTicketFeed(results.data)
              })
              .catch((err) => (console.log(err)))

          } else if (userData.isVolunteer === false) {
            axios.get('/api/tasks/requester', { params: {firebase_id: userData.firebase_id }})
              .then((results) => (setTicketFeed(results.data[0].tasks)))
              .catch((err) => (console.log(err)))
          }
        })
        .catch((err) => (console.log(err)))
    )
  }

  const logOut = () => {
    logout()
  }

  if (currentUser) {
    return (
      <div id="list-container">
        <div id="dash-header">
          <Logo />
          <div id="end-links" className="d-flex justify-content-end">
            <div>
              <img src={currentUser.photoURL} />
            </div>
            <div id="Log-In-Button" name="login" >
              <Link to="/login">
                <button type="submit" id="login-button" name="login" className="btn btn-sm" >Log In</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="dash-welcome">
          <span>Welcome {currentUser.displayName}!</span>
        </div>
        {
          !volunteer &&
            <div className="dash-task-modal">
              <TaskModal currentUser={currentUser} />
            </div>
        }
        <div className="dash-ticketfeed">
          {
            ticketFeed.map((ticket) => (
              volunteer
                ? <VolunteerTile key={ticket._id} ticket={ticket} />
                : <RequestTile key={ticket._id} ticket={ticket}/>
            ))
          }
        </div>
        <button onClick={logOut}>Log Out</button>
      </div>
    );
  } else {
    return (
      <span>No logged in user.</span>
    );
  }
}

export default TileList;