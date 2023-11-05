const GET_POSTS = "GET_POSTS";
const CREATE_POST = "CREATE_POST";
const GET_POST_BY_ID = "GET_POST_BY_ID";
const UPDATE_POST = "UPDATE_POST";
const PATCH_POST = "PATCH_POST";
const DELETE_POST = "DELETE_POST";
const FILTER_POST = "FILTER_POST";
const LISTING_NESTED_POST = "LISTING_NESTED_POST";

// action creators
export const getPostById = (id) => {
  return { type: GET_POST_BY_ID, payload: id };
};
export const getPosts = () => {
  return { type: GET_POSTS, payload: [] };
};
export const deletePostById = (id) => {
  return { type: DELETE_POST, payload: id };
};

/* {
    id: 1,
    title: '...',
    body: '...',
    userId: 1
  } */

const postReducer = (state = [], action = {}) => {
  let result = [];

  switch (action.type) {
    case GET_POST_BY_ID: {
      fetch(`https://jsonplaceholder.typicode.com/posts/${action.payload}`)
        .then((response) => response.json())
        .then((json) => {
          console.log("GET_POST_BY_ID: ok");
          result = json;
        })
        .catch((error) => console.error(error));
      return [{ ...result }];
    }
    case GET_POSTS: {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log("GET_POSTS: ok");
          result = json;
        })
        .catch((error) => console.error(error));
      return [...result];
    }
    case DELETE_POST: {
      fetch(`https://jsonplaceholder.typicode.com/posts/${action.payload}`, {
        method: "DELETE",
      })
        .then((response) => console.log("DELETE_POST: ok"))
        .catch((error) => console.error(error));
      return state.filter((post) => {
        if (post.id === action.payload) return false;
        return true;
      });
    }
    default:
      return [...state];
  }
};

export default postReducer;
