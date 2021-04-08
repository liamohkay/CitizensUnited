// Libraries + dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Modal } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';

const OldTasksBtn = () => {
  const { currentUser } = useAuth();

  return (
    <Link
      to={{ pathname: `/oldtasks/${currentUser.uid}` }}
      style={{textDecoration: 'none', color: 'black'}}
    >
      <button type="button" class="btn btn-secondary">Old Tasks</button>
    </Link>
  );
}

export default OldTasksBtn;