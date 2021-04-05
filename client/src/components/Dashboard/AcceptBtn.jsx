// Libraries + dependencies
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext.js';
import { chat } from '../../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const AcceptBtn = ({ task_id }) => {
  const [roomID, setRoomID] = useState();
  const { currentUser } = useAuth();

  // Creates a new chatroom in firebase & returns the roomID
  const createChatRoom = () => {
    const chatRoomRef = chat.collection('chatRooms');
    chatRoomRef.add({ users: [], message: [] })
      .catch(err => console.log(err))
      .then(resp => setRoomID(resp._delegate._key.path.segments[1]))
  }

  // Adds volunteer to task in tasks collection
  const putVolunteer = () => {
    axios.put('/api/tasks/accepted', { task_id: '606b9271e40fcbf29959c181', firebase_id: currentUser.uid })
      .catch(err => console.log(err))
      .then(resp => console.log(resp))
  }

  // Get's task by task id that volunteer was just added to
  const getOneTask = () => {
    axios.get('/api/oneTask', { params: { task_id: '606b9271e40fcbf29959c181' }})
      .catch(err => console.log(err))
      .then(resp => console.log(resp))
  }

  const handleClick = (e) => {
    e.preventDefault();
    // createChatRoom();
    // putVolunteer();
    getOneTask();
    // get that specific task
    // parse out volunteer + requestor id
    // insert volunteer + requestor id to chatroom document
  }

  return (
    <>
      <button onClick={handleClick}>Accept</button>
    </>
  );
}

export default AcceptBtn;