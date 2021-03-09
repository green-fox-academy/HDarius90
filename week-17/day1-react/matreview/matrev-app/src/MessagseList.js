import { useEffect, useState } from 'react';
import db from './firebase/db';

import Message from './Message';

import './MessageList.css';

export default function MessageList(props) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    db.collection('chat')
      .orderBy('datetime', 'desc')
      .onSnapshot((queryRef) => {
        const list = [];
        queryRef.forEach((doc) => {
          const data = doc.data();
          list.push({
            id: doc.id,
            datetime: new Date(data.datetime.seconds * 1000),
            sender: data.sender,
            photoURL: data.photoURL,
            text: data.text
          });
        });
        setMessages(list);
      });
  }, [ messages.length ]);

  return (
    <div id="message-list">
      {messages.map((message) => {
        return (
            <Message key={message.id} message={message} user={props.user} />
        );
      })}
    </div>
  );
}