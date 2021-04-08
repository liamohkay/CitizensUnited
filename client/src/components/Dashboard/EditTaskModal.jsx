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
  duration: 0
};

const EditTaskModal = ({ ticket, mongoUser }) => {
  const { currentUser } = useAuth();
  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(Date.parse(ticket.start_time));
  const [endTime, setEndTime] = useState(Date.parse(ticket.end_time));
  const [fields, setFields] = useState(ticket);

  // Tracks user input on form fields
  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    });
    console.log(fields);
  };

  // Store ticket in firebase
  const handleClick = (e) => {
    e.preventDefault();
    const body = {
      _id: fields._id,
      requestor_id: currentUser.uid,
      requestor_name: currentUser.displayName,
      requestor_photo: currentUser.photoURL,
      requestor_thumbsUp: mongoUser.thumbsUp,
      requestor_thumbsDown: mongoUser.thumbsDown,
      task_date: startDate,
      task_status: 'Pending',
      task_body: fields.task_body,
      task_neighborhood: fields.task_neighborhood,
      start_time: startTime,
      end_time: endTime,
      duration: Math.round((endTime - startTime) / 60000),
    }
    axios.post('/api/tasks', body)
      .then(resp => handleClose())
      .then(() => null)
      .catch(err => console.log(err));
  }

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <button
        id="chat-btn"
        onClick={handleShow}
        style={{ width: "79px", backgroundColor: "#aaf8a7", border: "2px solid #aaf8a7", borderRadius: ".25rem" }}
      >
        Edit
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Edit Old Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group id="task">
              <Form.Label>Task:</Form.Label>
              <Form.Control  name="task_body" type="text" value={fields.task_body} onChange={handleChange} required />
            </Form.Group>
            <Form.Group id="neighborhood">
              <Form.Label>Neighborhood:</Form.Label>
              <Form.Control
                name="neighborhood"
                as={Neighborhood}
                value={fields.neighborhood}
                fields={fields}
                setFields={setFields}
              />
              {/* <Neighborhood fields={fields} setFields={setFields} /> */}
            </Form.Group>
            <Form.Group id="start-date">
              <Form.Label>Task Date:</Form.Label>
              <Form.Control
                name="task_date"
                as={Calendar}
                startDate={startDate}
                setStartDate={setStartDate}
              />
            </Form.Group>
            <Form.Group id="start-time">
              <Form.Label>Starts At:</Form.Label>
              <Form.Control
                name="start_time"
                as={TimeSelector}
                value={Date.parse(fields.start_time)}
                time={startTime}
                setTime={setStartTime}
              />
            </Form.Group>
            <Form.Group id="end-time">
              <Form.Label>Ends At:</Form.Label>
              <Form.Control
                name="end_time"
                as={TimeSelector}
                value={Date.parse(fields.end_time)}
                time={endTime}
                setTime={setEndTime}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button id="submit-button" className="w-100" onClick={handleClick}>Repost</Button>
          <Button id="cancel-button" className="w-100" onClick={handleClose}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditTaskModal;