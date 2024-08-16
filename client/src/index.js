
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import './index.css';
  import App from './App';
  import reportWebVitals from './reportWebVitals';
  import 'mdb-react-ui-kit/dist/css/mdb.min.css';
  import "@fortawesome/fontawesome-free/css/all.min.css";
  
  console.warn = (function (warn) {
    return function (message, ...args) {
      if (!message.includes("Listener added for a 'DOMNodeInserted' mutation event")) {
        warn.apply(console, [message, ...args]);
      }
    };
  })(console.warn);
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  reportWebVitals();
  