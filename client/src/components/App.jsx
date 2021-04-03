import React, { useState, useEffect } from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import LogIn from './LogIn';
import SignUp from './SignUp';
import HomePage from './Home/HomePage';
<<<<<<< HEAD
import VolunteerFeed from './VolunteerDashboard/Feed';
=======
import TileList from './TileList.jsx';
>>>>>>> dev

const App = () => {
  const [userID, setUserID] = useState('');

  return (
    <div id="app-container">
      <AuthProvider>
        <HomePage />
<<<<<<< HEAD
        <VolunteerFeed />
=======
        <LogIn setUserID={setUserID} />
        <SignUp />
        <TileList />
>>>>>>> dev
      </AuthProvider>
   </div>
  );
}

export default App;