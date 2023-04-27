import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import authConfig from './auth0-config';

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
            domain={authConfig.domain}
            clientId={authConfig.clientId}
            redirectUri={authConfig.redirectUri}
        >
            <App />
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
