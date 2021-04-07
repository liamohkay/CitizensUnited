// Libraries + dependencies
import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Card, Dropdown, DropdownButton } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { storage } from '../firebase';
import Login from './LogIn';
import Neighborhood from './Neighborhood'
import { BrowserRouter as Router, Link, NavLink, Switch, Route, useHistory} from 'react-router-dom';

const SignUp = ({ isVolunteer }) => {
  const { signup, currentUser } = useAuth();
  const history = useHistory();
  const [photoUrl, setPhotoUrl] = useState();
  const [fields, setFields] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    neighborhood: ''
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
      .put(e.target.files[0])

    task.on(
      'state_changed',
      snapshot => { },
      error => { console.log(error) },
      () => {
        storage
          .ref('photos')
          .child(e.target.files[0].name)
          .getDownloadURL()
          .then(url => setPhotoUrl(url))
      }
    )
  }

  // Checks for any blank fields & that phone number is 10 digits
  const validateFields = () => {
    Object.keys(fields).map(key => {
      if (fields[key].length === 0) {
        alert(`${key} cannot be blank`);
        throw `${key} cannot be blank`;
      } else if (key === 'phone' && fields[key].length !== 10) {
        alert('Phone number must be 10 digits');
        throw 'Phone number must be 10 digits';
      }
    });
  }

  // Submits sign up to firebase & creates new user
  const submitForm = (e) => {
    e.preventDefault();

    signup(fields.email, fields.password)
      .catch(err => console.log(err))
      .then((res) => {
        validateFields();
        res.user.updateProfile({
          displayName: `${fields.firstName} ${fields.lastName}` ,
          photoURL: photoUrl,
        });
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
          photo: photoUrl,
          tasks: [],
        }
        axios.post(`/api/users`, params)
          .catch(err => alert(`Failed to create Mongo Account for ${fields.email}`))
          .then(() => {
            alert(`Account for ${fields.email} created!`);
            history.push('/login');
          })
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
              <label>Neighborhood</label>
              <Neighborhood setFields={setFields} fields={fields}/>
              <br />
            <label className="form-label" htmlFor="customFile">Upload Profile Pciture</label>
            <input type="file" className="form-control" id="customFile" accept="image/*" onChange={handlePhoto} />
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