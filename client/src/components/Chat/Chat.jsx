import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { fb, chat, auth } from '../../firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage.jsx'

const getDocument = (documentPath, onUpdate) => {
  chat.collection('chatRooms')
    .doc(documentPath)
    .onSnapshot(onUpdate);
}

const Chat = ({ room_id }) => {
  const roomRef = chat.collection('chatRooms').doc(room_id);
  // const query = roomRef.limit(25);
  const [formValue, setFormValue] = useState('');
  const [messages] = useDocumentData(roomRef);

  // Sends message to chatroom and updates firebase db
  const sendMessage = (e) => {
    e.preventDefault();
    const { uid } = auth.currentUser;

    let msg = {
      text: formValue,
      createdAt: new Date(),
      uid: uid,
      // photoUrl: auth.currentUser.photoUrl /*user.photo*/
    }

    console.log(msg);
    roomRef.update({ messages: messages.messages.concat([msg]) })

    setFormValue('');
    // dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="chat">
      <div className="main">
        {/* {!messages ? null : JSON.stringify(messages.messages)} */}
        {!messages ? null : messages.messages.map(msg => <ChatMessage msg={msg} />)}
      </div>
      <form className="chatForm" onSubmit={sendMessage}>
        <input className="input" value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
        <button className="chatBtn" type="submit"> Send Message</button>
      </form>
    </div>
  )
}

export default Chat;