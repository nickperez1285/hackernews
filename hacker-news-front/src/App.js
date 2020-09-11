import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/home.js"
import HomeLoggedIn from "./components/homeLoggedIn.js"
import Login from "./components/login.js"
import Navbar from "./components/navbar.js"
import Form from "./components/form.js"
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// home1 is logged out home
function App() {
    return (
        <Router>
<div className="App">
  <Navbar/>

    <Route path="/home1"  exact component={Home} />
    <Route path="/login" exact component={Login} />
    <PrivateRoute path="/submit" exact component={Form} />
    <PrivateRoute path="/home" exact component={HomeLoggedIn} />
    
  </div>
  </Router>
    );
}
export default App;