import React, { useState, useEffect } from 'react';
import Logo from './Logo.jsx';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage () {
  const [currentPage, setCurrentPage] = useState('home')

  const changePage = () => {
    setCurrentPage(e.target.name)
  }

  return (
    <div>
      <div id="Home-Page">
        <div id="logo">
          <Logo />
        </div>
        <div id="About-Us">
          About Us
        </div>
        <div id="Help">
          Help
        </div>
        <div id="Log-In-Button">
          <Button type="submit" >Log In</Button>
        </div>
        <div id="banner">
          {/* <img src='story.png' /> */}
        </div>
        <div>
          <Button type="volunteer-signup" > Sign up to be a volunteer</Button>
        </div>
        <div>
          <Button type="requester-signup" > Sign up to make requests</Button>
        </div>
      </div>
    </div>
  )
}