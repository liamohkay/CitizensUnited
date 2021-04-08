import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Modal } from 'react-bootstrap';

import { useAuth } from '../../contexts/AuthContext';
import Neighborhood from '../Neighborhood.jsx';
import Calendar from './Calendar';
import TimeSelector from './TimeSelector';


const initialState = {
  task: '',
  neighborhood: '',
  end_time: '',
};

const TaskModal = ({ mongoUser, currentUser, getRequesterTasks }) => {
  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [fields, setFields] = useState({
    task: '',
    neighborhood: '',
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
      requestor_thumbsUp: mongoUser.thumbsUp,
      task_date: startDate,
      task_status: 'Pending',
      task_body: fields.task,
      task_neighborhood: fields.neighborhood,
      start_time: startTime,
      end_time: endTime,
      duration: Math.round((endTime - startTime) / 60000),
    }
    console.log('Body', body)
    axios.post('/api/tasks', body)
      .then(resp => handleClose())
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
      <Button id="submit-request" variant="primary" onClick={handleShow}>
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
            <Form.Group id="neighborhood">
              <Form.Label>Neighborhood:</Form.Label>
              <Form.Control
                as={Neighborhood}
                fields={fields}
                setFields={setFields}
              />
              {/* <Neighborhood fields={fields} setFields={setFields} /> */}
            </Form.Group>
            <Form.Group id="start-date">
              <Form.Label>Task Date:</Form.Label>
              <Form.Control
                as={Calendar}
                startDate={startDate}
                setStartDate={setStartDate}
              />
            </Form.Group>
            <Form.Group id="start-time">
              <Form.Label>Starts At:</Form.Label>
              <Form.Control
                as={TimeSelector}
                time={startTime}
                setTime={setStartTime}
              />
            </Form.Group>
            <Form.Group id="end-time">
              <Form.Label>Ends At:</Form.Label>
              <Form.Control
                as={TimeSelector}
                time={endTime}
                setTime={setEndTime}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button id="submit-button" className="w-100" onClick={handleClick}>Submit</Button>
          <Button id="cancel-button" className="w-100" onClick={handleClose}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TaskModal;