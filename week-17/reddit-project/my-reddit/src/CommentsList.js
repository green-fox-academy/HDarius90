import { useEffect, useState } from 'react';
import db from './firebase/db';
import {Articles} from './Home';

//import Message from './Message';

//import './MessageList.css';

export default function CommentsList({id, timestamp, title, URL}) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    db.collection('comments')
      //.orderBy('datetime', 'desc')
      .onSnapshot((queryRef) => {
        const list = [];
        queryRef.forEach((doc) => {
          const data = doc.data();
          console.log(data)
          list.push({
            id: doc.id,
            timestamp: new Date(data.timestamp / 1000),
            title: data.title,
            URL: data.url
            
          });
        });
        setComments(list);
      });
  }, [ comments.length ]);

  return (
    <div id="comments-list">
      {comments.map((comment, id) => {

        
        return (
            <Articles comment={comment} />
        );
      })}
    </div>
  );
}