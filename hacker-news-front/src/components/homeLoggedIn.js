import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getPosts } from '../actions';


const HomeLoggedIn = (props) => {

    const [posts, setPosts] = useState([])
    // temporary
    useEffect(() => {
        axios.get(`https://superior2020.uc.r.appspot.com/posts`)
            .then(res => {
                // const data = res.data.hits
                // console.log(props.getPosts())
                setPosts(res.data.posts)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    return (
        <table style = {{
            width: "100%"
        }}>
    
    <tr className = "homebody">
        <td>
            { posts.map((post, idx) => (
            <table>
                <tbody>
                    <tr >
                        <td align="left" >{idx + 1}.
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
const mapStateToProps = state => {
    return {
        state
    };
};
export default connect(mapStateToProps, {
    getPosts
})(HomeLoggedIn);