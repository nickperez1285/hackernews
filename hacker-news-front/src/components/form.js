import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// make into private route 

const Form = (props) => {
    const [post, setPost] = useState(
        {
            title: '',
            url: '',
            text: '',

        })

    const changeHandler = ev => {
        // ev.persist();
        let value = ev.target.value
        setPost({
            ...post,
            [ev.target.name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault()
        // needs to be made
        props.addPost(post);
        setPost({

            title: '',
            url: '',
            text: '',

        });
    };


    return (
        <table style = {{
            width: "80%"
        }}>
        <tr style={{

        }}> <td style={{
            textAlign: "left",
            background: "#ff6600",
            height: "10px",
            textDecoration: "none",
            width: "80%"
        }}
        >  SUBMIT </td>    </tr>
        <tr>



        <td>
                <form onSubmit={handleSubmit} >
                TITLE
                    <input
        name="title"
        onChange={changeHandler}
        placeholder=""
        value={post.title}
        style = {{
            width: "80%",
        }}
        />
                    <div className="baseline" />
                    URL .   

                    <input
        name="url"
        onChange={changeHandler}
        placeholder=""
        value={post.url}
        style = {{
            width: "80%",
            display: "absolute"
        }}
        />
                    <div className="baseline" />
                   <center><p>OR</p></center>


				TEXT
                    <textarea
        name="text"
        onChange={changeHandler}
        placeholder=""
        value={post.text}
        rows="10"
        style = {{
            width: "80%",
            height: "100%",
            display: "absolute"
        }}
        />
                    <div className="baseline" />

                    <button className="md-button form-button" style={{
            verticalAlign: 'inherit'
        }}> Submit </button>
                </form>
                </td>
                </tr>
            </table>
    )
}





export default connect(null, {})(Form);