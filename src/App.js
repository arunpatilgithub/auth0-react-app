import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import authConfig from './auth0-config';

function App() {
  const {
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
    user
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
      <div>
        {!isAuthenticated && (
            <button onClick={() => loginWithRedirect()}>
              Log in
            </button>
        )}

        {isAuthenticated && (
            <div>
              <h1>Hello, {user.name}!</h1>
              <button onClick={() => logout()}>Log out</button>
            </div>
        )}
      </div>
  );
}

export default App;
