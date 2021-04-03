// Libraries + dependencies
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { storage } from '../firebase';
import Login from './LogIn';
import { BrowserRouter as Router, Link, NavLink, Switch, Route, useHistory} from 'react-router-dom';

const SignUp = ({ isVolunteer }) => {
  const { signup, currentUser } = useAuth();
  const [photoURL, setPhotoURL] = useState()
  const [fields, setFields] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    neighborhood: '',
    email: '',
    password: '',
    type: ''
  });

  // Tracks user input on form fields
  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    });
  }

  // Handles firebase photo upload, then saves the firebase url for the photo to state for submit to db
  const handlePhoto = (e) => {
    e.preventDefault();
    const task = storage
      .ref(`/photos/${e.target.files[0].name}`)
      .put(e.target.files)

    task.on(
      'state_changed',
      snapshot => { },
      error => { console.log(error) },
      () => {
        storage
          .ref('photos')
          .child(e.target.files[0].name)
          .getDownloadURL()
          .then(url => setPhotoURL(url))
      }
    )
  }

  // Submits sign up to firebase & creates new user
  const submitForm = (e) => {
    e.preventDefault();

    signup(fields.email, fields.password)
      .catch(err => console.log(err))
      .then((res) => {
        res.user.updateProfile({
          displayName: `${fields.firstName} ${fields.lastName}` ,
          photoURL: photoURL,
        })
        let params = {
          firebase_id: res.user.uid,
          first_name: fields.firstName,
          last_name: fields.lastName,
          neighborhood: fields.neighborhood,
          phone_number: fields.phone,
          email: fields.email,
          isVolunteer: isVolunteer,
          thumbsUp: 0,
          thumbsDown: 0,
          photo: photoURL,
          tasks: [],
        }
        console.log(params);
        axios.post(`/api/users`, params)
          .catch(err => alert(`Failed to create Mongo Account for ${fields.email}`))
          .then(() => alert(`Account for ${fields.email} created!`))
      })
  }

  return (
    <div id="signUp-container" name="signup">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4"> Sign Up</h2>
          <Form>
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
            <Form.Group id="signUpNeighborhood">
              <Form.Label> Neighborhood </Form.Label>
              <Form.Control
                name="neighborhood"
                type="neighborhood"
                value={fields.neighborhood}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <label class="form-label" htmlFor="customFile">Upload Profile Pciture</label>
            <input type="file" class="form-control" id="customFile" accept="image/*" onChange={handlePhoto} />
            <Button
              id="signup-button"
              className="w-100"
              type="submit"
              onClick={submitForm}
            > Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignUp;