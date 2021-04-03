import React, { useState, useEffect } from 'react';
import sampleFeed from './sampleFeed';
import { useAuth } from '../../contexts/AuthContext';

const Feed = () => {
  const { currentUser } = useAuth();
  const [posts, setPosts] = useState(sampleFeed);

  return(
    <div className="volunteer-feed">
      <div className="volunteer-feed-header">
        Welcome {currentUser.displayName}
      </div>
    </div>
  )
}

export default Feed;