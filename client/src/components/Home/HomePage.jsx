import React, { useState, useEffect } from 'react';
import Logo from './Logo.jsx';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage () {
  const [currentPage, setCurrentPage] = useState('home')

  const changePage = (e) => {
    setCurrentPage(e.target.name)
  }

  return (
    <div>
      <div id="Home-Page">
          <Logo />
        <div id="end-links" className="d-flex justify-content-end">
          <div id="About-Us">
            About Us
          </div>
          <div id="Help">
            Help
          </div>
          <div id="Log-In-Button" >
            <button type="submit" id="login-button" name="login" onClick={changePage} className="btn btn-sm" >Log In</button>
          </div>
        </div>
      </div>
      <div id="mission-statement">
        Mission Statement Here
      </div>
        <Card className="banner" id="banner" >
          <Card.Img src='story.png' />
        </Card>
        <div className="d-flex justify-content-around">
          <button type="submit" id="volunteer-button" className="btn btn-lg" name="volunteer" onClick={changePage}> Sign up to be a volunteer</button>
          <button type="submit" id="requester-button" className="btn btn-lg" name="requester" onClick={changePage}> Sign up to make requests</button>
        </div>
    </div>
  )
}