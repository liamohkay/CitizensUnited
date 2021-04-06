import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { chat, auth } from '../../firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage.jsx'


function useDocumentDataSSR(ref, options) {
  const [value, loading, error] = useDocumentData(ref, options)

  if (options?.startWith && loading) {
    return [options.startWith, loading, error]
  } else {
    return [value, loading, error]
  }

}

const Chat = ({ room_id }) => {
  // const { currentUser } = useAuth();
  const roomRef = chat.doc(`chatRooms/${room_id}`);
  // const [msgStream] = useDocumentData(roomRef)
  const [msgStream] = useDocumentDataSSR(roomRef, { startWith: 'messages' })
  // const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState('');



  // Sends message to chatroom and updates firebase db
  const sendMessage = (e) => {
    e.preventDefault();
    const { uid } = auth.currentUser;

    let msg = {
      text: formValue,
      createdAt: new Date(),
      uid: uid,
      photoUrl: currentUser.photoUrl
    }

    console.log(msg);
    roomRef.update({ messages: msgStream.messages.concat([msg]) })

    setFormValue('');
    // dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="chat-conatiner">

      { JSON.stringify(msgStream?.messages) }

    </div>
  )
}

export default Chat;