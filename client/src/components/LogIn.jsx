// Libraries + dependencies
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext.js';
import { useHistory } from 'react-router-dom';

const LogIn = ({ setUser }) => {
  const { login, currentUser } = useAuth();
  const history = useHistory();
  const [fields, setFields] = useState({
    email: '',
    password: ''
  });

  // Tracks user input on form fields
  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    });
  }

  // Sends login request to firebase
  const handleClick = (e) => {
    e.preventDefault();
    login(fields.email, fields.password)
      .catch(err => console.log(err))
      .then(res => {
        axios.get('/api/users', { params: { firebase_id: res.user.uid }})
          .catch(err => console.log(err))
          .then(resp => {
            setUser(resp.data[0]);
            history.push('/');
          })
      })
  }

  return (
    <div id="login-container">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control  name="email" type="email" value={fields.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" value={fields.password} onChange={handleChange} required />
            </Form.Group>
            <Button id="login-button" className="w-100" onClick={handleClick}>Log In</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2"></div>
    </div>
  )
}

export default LogIn;