import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { chat, auth } from '../../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const ChatMessage = (props) => {
  const { text, uid, photoURL } = props.message;

  // const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <>
      <div className='message'>
        <img className="chatPic" src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        <p>{text}</p>
      </div>
    </>)
}

export default ChatMessage;