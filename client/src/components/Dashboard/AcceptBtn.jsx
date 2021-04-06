// Libraries + dependencies
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext.js';
import { chat } from '../../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const AcceptBtn = ({ task_id }) => {
  const { currentUser } = useAuth();
  const chatRoomRef = chat.collection('chatRooms');
  task_id = '606b9271e40fcbf29959c181'

  // Creates a new chatroom in firebase & returns the roomID
  const createChatRoom = () => {
    chatRoomRef.add({ users: [], message: [] })
      .catch(err => console.log(err))
      .then(resp => setRoomID(resp._delegate._key.path.segments[1]))
  }

  // Adds volunteer id into task in tasks collection
  const putVolunteer = () => {
    axios.put('/api/tasks/accepted', { task_id, firebase_id: currentUser.uid })
      .catch(err => console.log(err))
      .then(() => null)
  }

  // Get's task by task id that volunteer was just added to
  const putChatUsers = () => {
    axios.get('/api/oneTask', { params: { task_id }})
      .catch(err => console.log(err))
      .then(resp => {
        const { requestor_id, volunteer_id } = resp.data[0];
        // Insert both ids into chatroom by id
        chatRoomRef.add({
          users: [requestor_id, volunteer_id],
          messages: []
        })
          .catch(err => console.log(err))
          .then(resp => {
            axios.put('/api/rooms', {
              task_id,
              room_id: resp._delegate._key.path.segments[1]
            })
          })
      })
  }

  const handleClick = (e) => {
    e.preventDefault();
    putVolunteer();
    putChatUsers();
  }

  return (
    <>
      <button onClick={handleClick}>Accept</button>
    </>
  );
}

export default AcceptBtn;