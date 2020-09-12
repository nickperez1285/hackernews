import React , { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import Login from "./login.js"
const Navbar = (props) => {
    let history = useHistory()


    const handleLogout = e => {
        e.preventDefault()
        localStorage.setItem("status", 0)
        console.log("logged out")
        history.push('/home1');
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
           {    localStorage.getItem("status") ?

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
            { localStorage.getItem("status") ?

            <form onSubmit={handleLogout}>
                
                <button > Logout </button>
           
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