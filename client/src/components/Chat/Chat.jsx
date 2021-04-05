import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { chat, auth } from '../../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage.jsx'

const Chat = ({ user }) => {
  // const query = messagesRef.orderBy('createdAt').limit(25);

  // const [messages] = useCollectionData(query, {idField: 'id'});
  // const [formValue, setFormValue] = useState('');


  // const sendMessage = /*async*/(e) => {
  //   e.preventDefault();

  //   const { uid } = auth.currentUser;

  //   /*await*/ messagesRef.add({
  //     text: formValue,
  //     createdAt: new Date(),
  //     uid: uid,
  //     photoUrl: 'include image later' /*user.photo*/
  //   })

  //   setFormValue('');
  //   // dummy.current.scrollIntoView({ behavior: 'smooth' });
  // }

  return (
    <div className="chat">
      {/* <div className="main">
        {messages && messages.map(msg => <ChatMessage key={msg.uid} message={msg}/>)}
      </div>
      <form className="chatForm" onSubmit={sendMessage}>
        <input className="input" value={formValue} onChange={(e) => setFormValue(e.target.value)}/>
        <button className="chatBtn" type="submit"> Send Message</button>
      </form> */}
    </div>
  )
}

export default Chat;