import React, { useState, useEffect } from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import LogIn from './LogIn.jsx';
import SignUp from './SignUp.jsx';

const App = () => {
  const [userID, setUserID] = useState('');

  return (
    <div id="app-container">
      <AuthProvider>
        <LogIn setUserID={setUserID} />
        <SignUp />
      </AuthProvider>
   </div>
  );
}

export default App;