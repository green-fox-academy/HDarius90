import { useState } from 'react';
import db from './firebase/db';

export default function InputMessage(props) {
  const [message, setMessage] = useState('');

  function handleOnChangeMessage(event) {
    setMessage(event.target.value);
  }

  async function handleOnClickSend(event) {
    event.preventDefault();
    
    await db.collection('chat')
      .add({
        datetime: new Date(),
        sender: props.user.displayName,
        photoURL: props.user.photoURL,
        text: message
      });
    setMessage('');
  }

  return (
    <div className="input-group mb-3">
      <form onSubmit={handleOnClickSend}>
        <input
          type="text"
          id="input-message"
          name="input-message"
          placeholder="Üzeneted"
          className="form-control"
          value={message}
          onChange={handleOnChangeMessage}
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-outline-primary">Elküld</button>
        </div>
      </form>
    </div>
  );
}