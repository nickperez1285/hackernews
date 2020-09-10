import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/home.js"
import Login from "./components/login.js"
import Navbar from "./components/navbar.js"
import Form from "./components/form.js"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
function App() {
    return (
        <Router>
<div className="App">
  <Navbar/>
    <Route path="/"  exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/submit" exact component={Form} />
    
  </div>
  </Router>
    );
}
export default App;