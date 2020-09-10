import axios from 'axios';
export const GET_POSTS_START = "GET_POSTS_START";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAIL = "GET_POSTS_FAIL";

export const getPosts = () => (dispatch) => {
    dispatch({
        type: "GET_POSTS_START"
    });
    axios.get('https://hn.algolia.com/api/v1/search?tags=front_page')
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

export const login = creds => dispatch => {

    return axios.post('http://localhost:5000/api/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.payload);

            // change when api complete, this makes a get request to api with token retrieved from above,, when logged in , we submit post request with 
            // creds, add to local storage andy tokens of session info,  then make a get request with whatever is returened from the post request 
            axios
                .get('http://localhost:5000/api/posts', {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                })
                .then(res => {
                    dispatch({
                        type: GET_POSTS_SUCCESS,
                        payload: res.data
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        });
};