import store from "../store";
import { clearPostAction, CLEAR_POST, hidePost } from "./getPosts";

const GET_POSTS = "GET_POSTS";
const CREATE_POST = "CREATE_POST";
const GET_POST_BY_ID = "GET_POST_BY_ID";
const DELETE_POST = "DELETE_POST";
const LISTING_NESTED_POST = "LISTING_NESTED_POST";
const CLEAR_POSTS = "CLEAR_POSTS";

// action creators
export const getPostById = (id) => {
  return { type: GET_POST_BY_ID, payload: id };
};
export const getPostsAction = (json) => {
  return { type: GET_POSTS, payload: json };
};
export const deletePostById = (id) => {
  return { type: DELETE_POST, payload: id };
};
export const getCommentsAction = (json) => {
  return { type: LISTING_NESTED_POST, payload: json };
};
export const newPostAction = (json) => {
  return { type: CREATE_POST, payload: json };
};
export const hidePostAction = (id) => {
  return clearPostAction(id);
};

/* {
    id: 1,
    title: '...',
    body: '...',
    userId: 1
  } */

const postReducer = (state = [], action = { type: "", payload: null }) => {
  switch (action.type) {
    case GET_POSTS: {
      return [...action.payload];
    }
    case LISTING_NESTED_POST: {
      return [...action.payload];
    }
    case CLEAR_POSTS: {
      return [];
    }
    case CREATE_POST: {
      return [...state, action.payload];
    }
    case CLEAR_POST: {
      return hidePost(state, action);
    }
    default: {
      /* console.log("POST_REDUCER_DEFAULT: ok");
      if (action?.payload && action?.payload !== null)
        return [...action.payload];
 */
      return [...state];
    }
  }
};

// getAllPosts is the "thunk action creator"
export function getAllPostsAction() {
  // getAllPosts is the "thunk function"
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      console.log("GET_POSTS: ok");
      store.dispatch(getPostsAction(json));
    })
    .catch((error) => console.error(error));
}
export function getPostsCommentsAction(id) {
  // This is equivalent to /comments?postId=1
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((response) => response.json())
    .then((json) => {
      console.log("LISTING_NESTED_POST: ok");
      store.dispatch(getCommentsAction(json));
    })
    .catch((error) => console.error(error));
}
export function getFotosAction(id) {
  // This is equivalent to /comments?postId=1
  return fetch(`https://jsonplaceholder.typicode.com//albums/${id}/photos`)
    .then((response) => response.json())
    .then((json) => {
      console.log("LISTING_NESTED_POST: ok");
      store.dispatch(getCommentsAction(json));
    })
    .catch((error) => console.error(error));
}
export function createPostAction(
  post = {
    title: "foo",
    body: "bar",
    userId: 1,
  }
) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => store.dispatch(newPostAction({ ...json, post })))
    .catch((error) => console.error(error));
}
export default postReducer;
