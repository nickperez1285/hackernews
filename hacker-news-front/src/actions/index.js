import axios from 'axios';
export const GET_POSTS_START = "GET_POSTS_START";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAIL = "GET_POSTS_FAIL";

export const getPosts = () => (dispatch) => {
    dispatch({
        type: "GET_POSTS_START"
    });
    axios.get('http://hn.algolia.com/api/v1/items/1')
        .then(res => {
            dispatch({
                type: GET_POSTS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => dispatch({
            type: GET_POSTS_FAIL,
            payload: `${err.res.state}
		${err.res.data}`
        })

    )
}