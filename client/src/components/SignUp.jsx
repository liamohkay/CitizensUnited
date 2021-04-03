// Libraries + dependencies
import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext.js';

const SignUp = () => {
  const { signup } = useAuth();
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
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

  // Submits sign up to firebase & creates new user
  const submitForm = (e) => {
    e.preventDefault();
    signup(fields.email, fields.password)
      .catch(err => console.log(err))

      .then(resp => {
        alert(`Account for ${fields.email} created!`);
      })
  }

  return (
    <div id="signUp-container">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4"> Sign Up</h2>
          <Form>
            <Form.Group id="signUpFirstName">
              <Form.Label> First Name </Form.Label>
              <Form.Control
                name="firstName"
                type="firstName"
                value={fields.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group id="signUpLastName">
              <Form.Label> Last Name </Form.Label>
              <Form.Control
                name="lastName"
                type="lastName"
                value={fields.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group id="signUpPhone">
              <Form.Label> Phone Number </Form.Label>
              <Form.Control
                name="phone"
                type="phone"
                value={fields.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group id="signUpAddress">
              <Form.Label> Address </Form.Label>
              <Form.Control
                name="address"
                type="address"
                value={fields.address}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group id="signUpEmail">
              <Form.Label> Email </Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={fields.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group id="signUpPassword">
              <Form.Label> Password </Form.Label>
              <Form.Control
                name="password"
                type="password"
                value={fields.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button
              className="w-100"
              type="submit"
              onClick={submitForm}
            > Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log In
      </div>
    </div>
  )
}

export default SignUp;