import { useState } from 'react';

import './App.css';

import Login from './Login';
import InputMessage from './InputMessage';
import MessageList from './MessageList';
import Logout from './Logout';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      { !user && <Login user={user} onLogin={setUser} /> }
      { user && (
        <>
          <Logout user={user} />
          <InputMessage user={user} />
          <MessageList user={user}/>
        </>
      ) }
    </div>
  );
}

export default App;