import React, { useState, useEffect } from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import LogIn from './LogIn';
import SignUp from './SignUp';
import HomePage from './Home/HomePage';

const App = () => {
  const [userID, setUserID] = useState('');

  return (
    <div id="app-container">
      <AuthProvider>
        <HomePage />
      </AuthProvider>
   </div>
  );
}

export default App;