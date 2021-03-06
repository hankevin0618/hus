import React, { useEffect, useState } from 'react';
import '../css/App.css';
import { authService, realtimeDB } from '../myBase';
import AppRouter from './Router';

function App() {
  const [loading, setLoading] = useState(true);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user);
        realtimeDB.ref('users/' + user.uid).update({
          lastSignInTime: user.metadata.lastSignInTime
        });
      }
      setLoading(false);
    });

  }, [userObj]);

  return (
    <>
      {
        loading
          ? <>Loading...</>
          :
          <div className="App">
            <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} />
          </div>
      }
    </>
  );
}

export default App;
