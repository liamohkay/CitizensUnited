import React, { useState, useEffect } from 'react';
import SignUp from './SignUp.jsx';
import { AuthProvider } from '../contexts/AuthContext';


const App = () => {
  return (
    <AuthProvider>
      <div id="app-container">
        Hello world
        <SignUp />
      </div>
    </AuthProvider>
  );
}

export default App;