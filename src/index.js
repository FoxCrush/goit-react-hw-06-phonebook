import 'modern-normalize/modern-normalize.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import store from 'redux/store';
import { Provider } from 'react-redux';

// old
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// React 18
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App tab="home" />
    </Provider>
  </React.StrictMode>
);
