import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {




    return (
        <table style = {{
            width: "100%"
        }}>
	<tr className = "header" style={{
            background: "#ff6600",
            height: "10px",
        }}>
		<td style={{
            textAlign: "left"
        }}>
			<span >
				<strong>
				Hacker News
				</strong>
				<a href="">new | </a>
				<a href="">past | </a>
				<a href="">comments | </a>
				<a href="">ask | </a>
				<a href="">show | </a>
				<a href="">jobs | </a>
				<a href="">submit | </a>
			</span>
		</td>
		<td style={{
            textAlign: "right"
        }}>
        <Link to="/login">
			login
			</Link>
		</td>
	</tr>
	</table>



    )
}

export default Navbar;