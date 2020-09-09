import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/home.js"
import Login from "./components/login.js"
import Navbar from "./components/navbar.js"
import { Route } from 'react-router-dom'


function App() {
    return (

        <div className="App">

        <Navbar/>

        <Route path="/" exact component={Home} />
       <Route path="/login" exact component={Login} />

   
    </div>
    );
}

export default App;
