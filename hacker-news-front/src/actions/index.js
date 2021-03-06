import axios from "axios";
import Cookies from "js-cookie";
import cookie from "react-cookies";
import useAxios, { configure } from "axios-hooks";

export const GET_POSTS_START = "GET_POSTS_START";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAIL = "GET_POSTS_FAIL";

export const getPosts = () => (dispatch) => {
  dispatch({
    type: "GET_POSTS_START",
  });
  axios
    .get("https://hn.algolia.com/api/v1/search?tags=front_page")
    .then((res) => {
      dispatch({
        type: GET_POSTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: GET_POSTS_FAIL,
        payload: `${err.res.state}
        ${err.res.data}`,
      })
    );
};

export const addPost = (post) => (dispatch) => {
  // const {token} = localStorage.getItem("token")
  // console.log(cookie.load('connect.sid'), "cookie loader"
  // // )
  // // const info = Cookies.get('cook')
  // // console.log(info, "infocookie")

  return axios
    .post("https://hackernewsclone5.herokuapp.com/posts/post", post, {
      withCredentials: true,
      crossDomain: true,
    })

    .then((res) => {
      console.log(res, "pos tresponse ");
      axios
        .get("https://hackernewsclone5.herokuapp.com/posts", {
          withCredentials: true,
        })

        .then((res) => {
          dispatch({
            type: GET_POSTS_SUCCESS,
            payload: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
};

export const login = (creds) => (dispatch) => {
  return axios
    .post("https://hackernewsclone5.herokuapp.com/users/login", creds, {
      withCredentials: true,
    })
    .then((res) => {
      console.log("response login", res);
      res.data.success == "logged in"
        ? localStorage.setItem("status", 1)
        : localStorage.setItem("status", 0);
      console.log(res, "login info response");

      localStorage.getItem("status")
        ? localStorage.setItem("username", JSON.stringify(creds.username))
        : localStorage.setItem("username", "");
      // console.log(localStorage, 'loclstorage info ');

      localStorage.setItem("token", res.config.headers);
      console.log("token");

      const instance = axios.create({
        withCredentials: true,
        baseURL: "https://hackernewsclone5.herokuapp.com",
      });

      console.log("instance", instance);

      // let cookStore = cookie.load('connect.sid')

      // Cookies.set('cook', cookStore)

      // console.log(cookStore, "cookStore")

      axios
        .get("https://hackernewsclone5.herokuapp.com/posts", {
          withCredentials: true,
        })

        .then((res) => {
          dispatch({
            type: GET_POSTS_SUCCESS,
            payload: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
};

export const registerNew = (creds) => (dispatch) => {
  return axios
    .post("https://hackernewsclone5.herokuapp.com/users/register", creds, {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.data);
      res.data.success == "User Created"
        ? localStorage.setItem("status", 1)
        : localStorage.setItem("status", 0);

      localStorage.getItem("status")
        ? localStorage.setItem("username", JSON.stringify(creds.username))
        : localStorage.setItem("username", "");

      // console.log(localStorage, 'loclstorage info ');

      // let cookStore = cookie.load('connect.sid')

      // Cookies.set('cook', cookStore)

      // console.log(cookStore, "cookStore")

      axios
        .get("https://hackernewsclone5.herokuapp.com/posts", {
          withCredentials: true,
        })

        .then((res) => {
          dispatch({
            type: GET_POSTS_SUCCESS,
            payload: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
};
