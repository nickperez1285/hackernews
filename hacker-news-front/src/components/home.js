import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { link } from 'react-router-dom';

const Home = () => {
    const [posts, setPosts] = useState([])
    // temporary
    useEffect(() => {
        axios.get(`https://hn.algolia.com/api/v1/search?tags=front_page`)
            .then(res => {
                // const data = res.data.hits
                setPosts(res.data.hits)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
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
			login
		</td>
	</tr>
	<tr className = "homebody">
		<td>
			{ posts.map((post, idx) => (
            <table>
				<tbody>
					<tr >
						<td align="left" >{idx + 1}
							<a href="" style = {{
                textDecoration: "none"
            }}>
								^
							</a>
							
							<a href = {post.url} style = {{
                textDecoration: "none",
                color: 'black',
                textAlign: 'left'
            }}> {post.title}     </a>
						</td>
					</tr>
					
						<td className = "subtext"  style = {{
                fontSize: "10px",
                display: "inherit"
            }}>
				{post.points} points by {post.author} | <a href="/"  style = {{
                textDecoration: "none",
                color: 'black',
            }}> {post.num_comments} comments</a>
				</td>
				</tbody>
			
			</table>
        ))
        }
		</td>
	</tr>
</table>
    )
}
export default Home;