import React, { useState } from 'react';
import { connect } from 'react-redux';


const HomeLoggedIn = (props) => {




    const handleSubmit = e => {
        e.preventDefault()
        localStorage.clear()
        props.history.push('/');

    };


    return (
        <div>
                <form onSubmit={handleSubmit}>
                  

                    <button className="md-button form-button"> Logout </button>
{                    console.log(localStorage)}             
   </form>
            </div>
    )
}





export default connect(null, {})(HomeLoggedIn);

