import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const firstNameRef = useRef(() => console.log(firstNameRef));

  const changeFirstName = (e) => {
    setFirstName(e.target.value);
    console.log(firstName);
  }

  const changeLastName = (e) => {
    setLastName(e.target.value);
    console.log(lastName);
  }

  const changePhone = (e) => {
    setPhone(e.target.value);
    console.log(phone);
  }

  const changeAddress = (e) => {
    setAddress(e.target.value);
    console.log(address);
  }

  const changeEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  }

  const changePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  }

  const submitForm = (e) => {
    e.preventDefault();
    // INSERT POST REQUEST
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
                type="firstName"
                value={firstName}
                onChange={changeFirstName}
                required
              />
            </Form.Group>
            <Form.Group id="signUpLastName">
              <Form.Label> Last Name </Form.Label>
              <Form.Control
                type="lastName"
                value={lastName}
                onChange={changeLastName}
                required
              />
            </Form.Group>
            <Form.Group id="signUpPhone">
              <Form.Label> Phone Number </Form.Label>
              <Form.Control
                type="phone"
                value={phone}
                onChange={changePhone}
                required
              />
            </Form.Group>
            <Form.Group id="signUpAddress">
              <Form.Label> Address </Form.Label>
              <Form.Control
                type="address"
                value={address}
                onChange={changeAddress}
                required
              />
            </Form.Group>
            <Form.Group id="signUpEmail">
              <Form.Label> Email </Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={changeEmail}
                required
              />
            </Form.Group>
            <Form.Group id="signUpPassword">
              <Form.Label> Password </Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={changePassword}
                required
              />
            </Form.Group>
            <Button
              className="w-100"
              type="submit"
              onSubmit={submitForm}
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