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

export const addPost = (post) => (dispatch) => {
    return axios.post('http://localhost:3000/posts/post', post)
        .then(res => {
            axios
                .get('http://localhost:3000/posts')

                .then(res => {
                    dispatch({
                        type: GET_POSTS_SUCCESS,
                        payload: res.data
                    });
                })
                .catch(err => {
                    console.log(err);
                });

        })
}

export const login = creds => dispatch => {

    return axios.post('https://superior2020.uc.r.appspot.com/users/login', creds)
        .then(res => {
            res.data.success == "logged in" ? localStorage.setItem('status', 1) : localStorage.setItem('status', 0);
            console.log(localStorage, 'actions');

            localStorage.getItem('status') ? localStorage.setItem("username", creds.username) : localStorage.setItem('username', '');
            axios
                .get('https://superior2020.uc.r.appspot.com/posts')

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