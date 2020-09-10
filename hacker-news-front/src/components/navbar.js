import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Navbar = () => {




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
				<Link to="/" style = {{
            textDecoration: "none",
            color: "black"
        }}>Hacker News </Link> 
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
        <Link to="/login" style = {{
            textDecoration: "none",
            color: "black"
        }}>
			login
			</Link>
		</td>
	</tr>
	</table>


    )
}

export default Navbar;