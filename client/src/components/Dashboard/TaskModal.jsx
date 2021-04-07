import React, { useState, useEffect } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import Neighborhood from '../Neighborhood.jsx';

const initialState = {
  task: '',
  neighborhood: '',
  start_time: '',
  end_time: '',
};

const TaskModal = ({ currentUser, getRequesterTasks, mongoUser }) => {
  const [show, setShow] = useState(false);
  const [fields, setFields] = useState({
    task: '',
    neighborhood: '',
    start_time: '',
    end_time: '',
  });

  const clearState = () => {
    setFields({ ...initialState });
  };

  // Tracks user input on form fields
  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    });
  };

  // Store ticket in firebase
  const handleClick = (e) => {
    e.preventDefault();
    const body = {
      requestor_id: currentUser.uid,
      requestor_name: currentUser.displayName,
      requestor_photo: currentUser.photoURL,
      task_date: new Date(),
      task_status: 'Pending',
      task_body: fields.task,
      task_neighborhood: fields.neighborhood,
      start_time: fields.start_time,
      end_time: fields.end_time,
    }
    axios.post('/api/tasks', body)
      .then(resp => {
        handleClose();
      })
      .then(() => getRequesterTasks(mongoUser))
      .catch(err => console.log(err));
  }

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    clearState();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        SUBMIT NEW REQUEST
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Create New Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group id="task">
              <Form.Label>Task:</Form.Label>
              <Form.Control  name="task" type="text" value={fields.task} onChange={handleChange} required />
            </Form.Group>
            <label>Neighborhood</label>
            <Neighborhood fields={fields} setFields={setFields} />
            <Form.Group id="start-time">
              <Form.Label>Starts At:</Form.Label>
              <Form.Control name="start_time" type="text" value={fields.start_time} onChange={handleChange} required />
            </Form.Group>
            <Form.Group id="end-time">
              <Form.Label>Ends At:</Form.Label>
              <Form.Control name="end_time" type="text" value={fields.end_time} onChange={handleChange} required />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button id="cancel-button" className="w-100" onClick={handleClose}>Cancel</Button>
          <Button id="login-button" className="w-100" onClick={handleClick}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TaskModal;