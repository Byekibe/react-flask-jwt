import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import {UserTokenProvider} from './context/UserAuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <UserTokenProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserTokenProvider>
  </Router>,
)
