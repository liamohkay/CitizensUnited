// Libraries + dependencies
import React, { useState, useEffect } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext.js';
import firebase from 'firebase';
import { auth } from '../firebase.jsx';

const LogIn = ({ setUserID }) => {
  const { login } = useAuth();
  const [fields, setFields] = useState({
    email: '',
    password: '',
    phoneNumber: '',
    code: ''
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

    // // If user provides phone number, verify using phone auth
    // if (fields.phoneNumber !== '') {
    //   let appVerifier = window.recaptchaVerifier;
    //   firebase.auth().signInWithPhoneNumber(fields.phoneNumber, appVerifier)
    //     .catch(err => alert(`Could not verify using ${fields.phoneNumber}`))
    //     .then(confirmationResult => {
    //       window.confirmationResult = confirmationResult
    //       confirmationResult
    //         .confirm(fields.code)
    //         .catch(err => console.log(err))
    //         .then(resp => {
    //           setUserID(resp.user.uid);
    //           console.log(`${fields.email} signed in`);
    //         })
    //     })
    // }

    // If they dod not provide phone number, verify using email password
    login(fields.email, fields.password)
      .catch(err => console.log(err))
      .then(resp => {
        setUserID(resp.user.uid);
        console.log(`${fields.email} signed in`);
      })
  }

  // Phone auth invisible captcha
  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-btn', {
      'size': 'invisible',
      'callback': response => {
        handleClick();
      }
    });
  }


  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          <Form>
            { /* Email + password login */ }
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control  name="email" type="email" value={fields.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" value={fields.password} onChange={handleChange} required />
            </Form.Group>

            { /* Phone login */ }
            {/* <Form.Group id="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control name="phoneNumber" type="phoneNumber" value={fields.phoneNumber} onChange={handleChange} />
            </Form.Group>
            <Form.Group id="code">
              <Form.Label>Verification Code</Form.Label>
              <Form.Control name="code" type="code" value={fields.code} onChange={handleChange} />
            </Form.Group> */}
            <Button id="sign-in-btn" className="w-100" onClick={handleClick}>Log In</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2"></div>
    </>
  )
}

export default LogIn;