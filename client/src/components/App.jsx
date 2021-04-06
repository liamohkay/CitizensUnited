// Libraries + dependencies
import React, { useState, useEffect } from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
// Components
import LogIn from './LogIn';
import SignUp from './SignUp';
import HomePage from './Home/HomePage';
import TileList from './Dashboard/TileList';
import PrivateRoute from './PrivateRoute';
import Chat from './Chat/Chat.jsx'

const App = () => {
  const [user, setUser] = useState('');
  const [isVolunteer, setIsVolunteer] = useState();
  // const { currentUser } = useAuth();use()

  return (
    <div id="app-container">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={TileList} />
            <Route exact path="/home" render={() => <HomePage setIsVolunteer={setIsVolunteer} />} />
            <Route exact path="/signup" render={() => <SignUp isVolunteer={isVolunteer} />} />
            <Route exact path="/login" render={() => <LogIn setUser={setUser} />} />
          </Switch>
        </Router>
        <Chat user={user}/>
      </AuthProvider>
    </div>
  );
}

export default App;