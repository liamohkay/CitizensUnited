import React, { useState, useEffect } from 'react';
import { AuthProvider } from '../contexts/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <div id="app-container">
        Hello world
      </div>
    </AuthProvider>
  );
}

export default App;