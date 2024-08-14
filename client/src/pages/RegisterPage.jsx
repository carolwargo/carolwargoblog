import React, {useState} from 'react';
import '../styles/test.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegisterPage = () => {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

async function register(ev) {
  ev.preventDefault();
  await fetch('http://localhost:4000/register',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({username,password})
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
  })
}

return (
<div className='container justify-content-center' style={{maxWidth:'600px'}}>
  <form className='register pb-5' 
  onSubmit={register}>
      <h1 className='text-center m-3'>Register</h1>
      <input 
      type="text"
      placeholder='username' 
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
      />
      <input 
      type="text"
      placeholder='password' 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <button>Register</button>
        </form>
        </div>
);
}

export default RegisterPage;