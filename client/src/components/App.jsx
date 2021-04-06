import React, { useState, useEffect } from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Link, NavLink, Switch, Route, useHistory } from 'react-router-dom';
import LogIn from './LogIn';
import SignUp from './SignUp';
import HomePage from './Home/HomePage';
import TileList from './Dashboard/TileList';
import PrivateRoute from './PrivateRoute';
import Map from './Map/Map';

const App = () => {
  const [user, setUser] = useState('');
  const [isVolunteer, setIsVolunteer] = useState();

  return (
  <div id="app-container">
    {/* <AuthProvider>
      <Router >
        <Switch>
          <PrivateRoute exact path="/" component={TileList} />
          <Route exact path="/home" render={() => <HomePage setIsVolunteer={setIsVolunteer} />} />
          <Route exact path="/signup" render={() => <SignUp isVolunteer={isVolunteer} />} />
          <Route exact path="/login" render={() => <LogIn setUser={setUser} />} />
        </Switch>
      </Router>
      </div> */}
      <div id="map">
        <Map/>
      </div>
    </div>
  );
}

export default App;