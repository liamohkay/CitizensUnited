import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import LogIn from '../LogIn';
import SignUp from '../SignUp';
import { BrowserRouter as Router, Link, NavLink, Switch, Route, useHistory} from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage () {

  return (
    <div>
      <div id="Home-Page">
          <Logo />
        <div id="end-links" className="d-flex justify-content-end">
          <div id="About-Us">
          <a id="About-Us" href="#" className="link" name="about-us">About Us</a>
          </div>
          <div id="Help">
          <a id="Help" href="#" className="link" name="help">Help</a>
          </div>
          <div id="Log-In-Button" name="login" >
            <Link to="/login">
            <button type="submit" id="login-button" name="login" className="btn btn-sm" >Log In</button>
            </Link>
          </div>
        </div>
      </div>
      <div id="mission-statement">
        Mission Statement Here
      </div>
        <Card className="banner" id="banner" >
          <Card.Img src='story.png' />
        </Card>
        <div>
          <Link to="/signup">
            <div className="d-flex justify-content-around">
                <button type="submit" id="volunteer-button" className="btn btn-lg" name="volunteer" >
                Sign up to be a volunteer</button>
                <button type="submit" id="requester-button" className="btn btn-lg" name="requester"> Sign up to make requests</button>
            </div>
          </Link>
          </div>
    </div>
  )
}