// Libraries + dependencies
import React, { useState, useEffect } from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
// Components
import LogIn from './LogIn';
import SignUp from './SignUp';
import HomePage from './Home/HomePage';
import TileList from './Dashboard/TileList';
import TaskView from './Dashboard/TaskView';
import PrivateRoute from './PrivateRoute';
import Map from './Map/Map';

const App = () => {
  const [user, setUser] = useState('');
  const [isVolunteer, setIsVolunteer] = useState();

  return (
  <div id="app-container">
    <AuthProvider>
      <Router >
        <Switch>
          <PrivateRoute exact path="/" component={TileList} user={user} />
          <PrivateRoute exact path="/:task_id" component={TaskView} user={user} />
          <Route exact path="/home" render={() => <HomePage setIsVolunteer={setIsVolunteer} />} />
          <Route exact path="/signup" render={() => <SignUp isVolunteer={isVolunteer} />} />
          <Route exact path="/login" render={() => <LogIn setUser={setUser} />} />
        </Switch>
      </Router>
    </AuthProvider>
  </div>
  )
}

export default App;