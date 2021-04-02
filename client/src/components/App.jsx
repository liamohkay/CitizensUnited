import React, { useState, useEffect } from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import LogIn from './LogIn.jsx';
import SignUp from './SignUp.jsx';

const App = () => {
  return (
    <div id="app-container">
      <AuthProvider>
        <LogIn />
        <SignUp />
      </AuthProvider>
   </div>
  );
}

export default App;