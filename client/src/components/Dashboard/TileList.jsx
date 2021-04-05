import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import RequestTile from './RequestTile';
import VolunteerTile from './VolunteerTile';
import sampleFeed from './sampleFeed';
import Logo from '../Home/Logo';

const TileList = ({ user }) => {
  const [ticketFeed, setTicketFeed] = useState(sampleFeed);

  // Gets current signed-in user for displayName and photoURL props
  const { currentUser } = useAuth();

  console.log('User-TileList', user.isVolunteer)
  let exampleUser = { isVolunteer: true }; // This is just sample so we can bool check for tiles

  // Grab ticket feed on load & re-render
  // useEffect(() => {
  //   setTicketFeed(sampleFeed);
  // }, [])

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
            ticketFeed.map(ticket => (
              !exampleUser.isVolunteer
                ? <VolunteerTile key={ticket.task_id} ticket={ticket} />
                : <RequestTile key={ticket.task_id} ticket={ticket}/>
            ))
          }
        </div>
      </div>
    );
  } else {
    return (
      <span>No logged in user.</span>
    );
  }
}

export default TileList;