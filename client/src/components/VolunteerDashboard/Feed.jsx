import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import sampleFeed from './sampleFeed';
import Ticket from './Ticket';

const Feed = () => {
  const { currentUser } = useAuth();
  const [tickets, setTickets] = useState(sampleFeed);

  return (
    <div className="volunteer-feed">
      <div className="volunteer-feed_header">
        Welcome {currentUser.displayName}
      </div>
      <div className="volunteer-feed_list">
        {
          tickets.map((ticket) => (
            <Ticket />
          ))
        }
      </div>
    </div>
  )
}

export default Feed;