import { useEffect } from 'react';
import auth, { AuthenticationProvider } from './firebase/auth';

export default function Login(props) {
  const { user, onLogin } = props;
  
  function handleOnClickLogin() {
    auth()
      .signInWithPopup(AuthenticationProvider)
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    auth()
      .onAuthStateChanged((user) => {
        if (user) {
          onLogin(user);
        }
      });
  }, [ user, onLogin ]);

  return (
    <div className="login-container">
      <button type="button" onClick={handleOnClickLogin}>Bejelentkezés Google-lel</button>
    </div>
  );
}