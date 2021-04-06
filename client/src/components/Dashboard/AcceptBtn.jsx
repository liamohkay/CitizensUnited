// Libraries + dependencies
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext.js';
import { chat } from '../../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Link } from 'react-router-dom';

const AcceptBtn = ({ ticket, task_id, setLoaded }) => {
  const { currentUser } = useAuth();
  const chatRoomRef = chat.collection('chatRooms');

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
            axios.put('/api/rooms', { task_id, room_id: resp._delegate._key.path.segments[1] })
              // Force dashboard to rerender on click to update info on return
              .then(() => setLoaded(prev => !prev))
          })
    })
  }

  const handleClick = (e) => {
    putVolunteer();
    putChatUsers();
  }

  return (
    <Link
      to={{ pathname: `/task/${task_id}`, state: { ticket, room_id: ticket.room_id, isVolunteer: true } }}
      style={{textDecoration: 'none', color: 'black'}}
      onClick={handleClick}
    >
      <button >
        { ticket.task_status.toLowerCase() === 'accepted'
          ? <span>Open Chat</span>
          : <span>Accept</span> }
      </button>
    </Link>
  );
}

export default AcceptBtn;
