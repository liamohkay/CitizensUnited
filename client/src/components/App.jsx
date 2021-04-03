import React, { useState, useEffect } from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import LogIn from './LogIn';
import SignUp from './SignUp';
import HomePage from './Home/HomePage';
import VolunteerFeed from './VolunteerDashboard/Feed';

const App = () => {
  const [userID, setUserID] = useState('');

  return (
    <div id="app-container">
      <AuthProvider>
        <HomePage />
        <VolunteerFeed />
      </AuthProvider>
   </div>
  );
}

export default App;