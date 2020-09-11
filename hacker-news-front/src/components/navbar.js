import React , { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const Navbar = (props) => {


    const handleLogout = e => {
        e.preventDefault()
        localStorage.clear()
        console.log("logged out")
        props.history.push('/home1');
    };
    return (
        <table style = {{
            width: "100%",
            textDecoration: "none"
        }}>
    <tr className = "header" style={{
            background: "#ff6600",
            height: "10px",
            textDecoration: "none"
        }}>
        <td style={{
            textAlign: "left",
            textDecoration: "none",
        }}>
            <span >
                <strong>
           {    localStorage.getItem('token') ?

            <Link to="/home" style = {{
                textDecoration: "none",
                color: "black"
            }}>Hacker News </Link>
            :
            <Link to="/home1" style = {{
                textDecoration: "none",
                color: "black"
            }}>Hacker News </Link>
        }
                </strong>

                <a href="">new | </a>
                <a href="">past | </a>
                <a href="">comments | </a>
                <a href="">ask | </a>
                <a href="">show | </a>
                <a href="">jobs | </a>
                <a href="/submit" style= {{ }}>submit | </a>
            </span>
        </td>
        <td style={{
            textAlign: "right",
        }}>
            {  localStorage.getItem('token') ?

            <form onSubmit={handleLogout}>
                
                <button className="md-button form-button"> Logout </button>
                {                    console.log(localStorage)}
            </form>
            :
            <Link to="/login" style = {{
                textDecoration: "none",
                color: "black"
            }}>
                login
            </Link>

        }
        </td>
    </tr>
</table>
    )
}
export default Navbar;