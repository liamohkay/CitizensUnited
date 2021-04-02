import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const SignUp = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div id="signUp-container">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4"> Sign Up</h2>
          <Form>
            <Form.Group id="signUpFirstName">
              <Form.Label> First Name </Form.Label>
              <Form.Control type="firstName" required/>
            </Form.Group>
            <Form.Group id="signUpLastName">
              <Form.Label> Last Name </Form.Label>
              <Form.Control type="lastName" required/>
            </Form.Group>
            <Form.Group id="signUpPhone">
              <Form.Label> Phone Number </Form.Label>
              <Form.Control type="phone" required/>
            </Form.Group>
            <Form.Group id="signUpAddress">
              <Form.Label> Address </Form.Label>
              <Form.Control type="address" required/>
            </Form.Group>
            <Form.Group id="signUpEmail">
              <Form.Label> Email </Form.Label>
              <Form.Control type="email" required/>
            </Form.Group>
            <Form.Group id="signUpPassword">
              <Form.Label> Password </Form.Label>
              <Form.Control type="password" required/>
            </Form.Group>
            <Button className="w-100" type="submit"> Sign Up </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log In
      </div>
      {/* <h2>Create User Account</h2>
      <form>
        <label>
          First Name:
          <input
            name="firstName"
            type="text"
            placeholder="Meredith"
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            type="text"
            placeholder="Meredith"
          />
        </label>
        <label>
          Phone Number:
          <input
            name="phone"
            type="text"
            placeholder="Meredith"
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            type="text"
            placeholder="Meredith"
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            type="text"
            placeholder="Meredith"
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="text"
            placeholder="Meredith"
          />
        </label>
      </form> */}
    </div>
  )
}

export default SignUp;