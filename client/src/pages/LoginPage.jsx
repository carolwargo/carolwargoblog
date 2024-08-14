import React from 'react';
import '../styles/test.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const LoginPage = () => {
    return (
        <div className='container justify-content-center' style={{maxWidth:'600px'}}>
          <form className='login pb-5' >
              <h1 className='text-center m-3'>Login</h1>
              <input type="text"placeholder='username' />
              <input type="text"placeholder='password' />
              <button>Login</button>
                </form>
                </div>
        );
        }

export default LoginPage;