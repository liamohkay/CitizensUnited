import React, { useState, useEffect } from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import LogIn from './LogIn';
import SignUp from './SignUp';
import HomePage from './Home/HomePage';
import { BrowserRouter as Router, Link, NavLink, Switch, Route, useHistory} from 'react-router-dom';
import TileList from './TileList.jsx';

const App = () => {
  const [user, setUser] = useState('');
  const [isVolunteer, setIsVolunteer] = useState();

  return (
  <div id="app-container">
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <HomePage setIsVolunteer={setIsVolunteer} />} />
          <Route exact path="/signup" render={() => <SignUp isVolunteer={isVolunteer} />}/>
          <Route exact path="/login" component={LogIn}/>
        </Switch>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;