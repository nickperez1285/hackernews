import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom"
const Login = (props) => {
    let history = useHistory()
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })
    // const [loggedIn, setLoggedIn] = useState(props.loggedIn)
    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const submit = e => {
        e.preventDefault();
        props.login(credentials).then(() => {
            history.push('/home');
            console.log("logged in")
        });
    }
    return (


        <div>
        <p> login info is
            username: 'test',
        password: 'test'</p>
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
        {console.log(props.state.loggedIn)}
            <button>Login</button>
        
        </form>
        
    </div>



    )
}

const mapStateToProps = state => {
    return {
        state
    };
};
export default connect(mapStateToProps, {
    login
})(Login);