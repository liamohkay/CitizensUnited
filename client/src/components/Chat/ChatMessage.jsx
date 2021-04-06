import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { chat, auth } from '../../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const ChatMessage = (props) => {
  const { text, uid, displayName } = props.msg;
  const msgType = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <>
      <div className='message'>
        <p>{text}</p>
      </div>
    </>)
}

export default ChatMessage;