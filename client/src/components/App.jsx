import React, { useState, useEffect } from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import LogIn from './LogIn';
import SignUp from './SignUp';
import HomePage from './Home/HomePage';
import { BrowserRouter as Router, Link, NavLink, Switch, Route, useHistory} from 'react-router-dom';
import { browserHistory } from 'react-router';
import TileList from './TileList.jsx';

const App = () => {
  const [userID, setUserID] = useState('');

  return (
  <div id="app-container">
    <AuthProvider>
      <Router history={browserHistory}>
        <Switch>
          <Route history={browserHistory} exact path="/" component={HomePage}/>
          <Route history={browserHistory} exact path="/signup" component={SignUp}/>
          <Route history={browserHistory} exact path="/login" component={LogIn}/>
        </Switch>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;