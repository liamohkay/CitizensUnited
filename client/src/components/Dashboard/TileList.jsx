import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import axios from 'axios';
import RequestTile from './RequestTile';
import VolunteerTile from './VolunteerTile';
import sampleFeed from './sampleFeed';
import Logo from '../Home/Logo';

const TileList = ({ user }) => {
  const [ticketFeed, setTicketFeed] = useState(sampleFeed);
  const [volunteer, setVolunteer] = useState('')

  // Gets current signed-in user for displayName and photoURL props
  const { currentUser, logout } = useAuth();

  // console.log('dbUser-TileList', user)
  // console.log('authUser-TileList', currentUser)

  let exampleUser = { isVolunteer: true }; // This is just sample so we can bool check for tiles

  // Grab ticket feed on load & re-render
  useEffect(() => {
    getUser()
      .then(() => getTasks())
  }, [])

  const getUser = () => {
    // Set firebase_id: currentUser.uid for final
    const options = {
      params: {
        firebase_id: 2
      }
    }
    return (
      axios.get('/api/users', options)
        .then((results) =>(setVolunteer(results.data[0].isVolunteer)))
        .catch((err) => (console.log(err)))
    )
  }

  const getTasks = () => {
    if (volunteer) {
      axios.get('/api/tasks/volunteer')
        .then((results) => (setTicketFeed(results.data)))
        .catch((err) => (console.log(err)))
    } else {
      axios.get('/api/tasks/requester')
        .then((results) => (setTicketFeed(results.data)))
        .catch((err) => (console.log(err)))
    }
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
        <div className="dash-ticketfeed">
          {
            sampleFeed.map(ticket => (
              !exampleUser.isVolunteer
                ? <RequestTile key={ticket.task_id} ticket={ticket} />
                : <VolunteerTile key={ticket.task_id} ticket={ticket} />
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