import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_POSTS,
        payload: data
      })
    );
};

export const newPost = (data) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers:{
        "content-type":"application/json; charset=utf-8"
      },
      body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => dispatch({
      type: NEW_POST,
      payload: data
    }))
}