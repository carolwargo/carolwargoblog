import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import '../styles/test.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function LoginPage () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type':'application/json' },
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then((user) => {
        setUserInfo(user);
        setRedirect(true);
      });
     
    } 
  }

  // Check for redirect after successful login
  if (redirect) {
    return <Navigate to={'/test'} />;
  }

  return (
    <div
      className='container justify-content-center'
      style={{ maxWidth: '600px' }}
    >
      <form className='login pb-5' onSubmit={login}>
        <h1 className='text-center m-3'>Login</h1>
        <input
          type='text'
          placeholder='username'
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        autoComplete='off' // Disable autocomplete
        />
        <input
          type='password' // This should be 'password' not 'text'
          placeholder='password'
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        autoComplete='off' // Disable autocomplete
        />
        <button>Login</button>
      </form>
    </div>
  );
};

