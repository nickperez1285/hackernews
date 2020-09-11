import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

const Login = (props) => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })


    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const submit = e => {
        e.preventDefault();
        props.login(credentials).then(() => {
            props.history.push('/home');
        });
    }

    return (
        <div>
      <p> login info is 
       username: 'nick',
      password: 'pass'</p>
        <form onSubmit={submit}>
          <label>Username</label> 

          <input
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChange}
        />
          <label> password</label> 
          <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        />
          <button>Login</button>
        </form>
      </div>
    );
}


export default connect(null, {
    login
})(Login);