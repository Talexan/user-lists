import store from "../store";

const GET_POSTS = "GET_POSTS";
const CREATE_POST = "CREATE_POST";
const GET_POST_BY_ID = "GET_POST_BY_ID";
//const UPDATE_POST = "UPDATE_POST";
//const PATCH_POST = "PATCH_POST";
const DELETE_POST = "DELETE_POST";
//const FILTER_POST = "FILTER_POST";
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
export const createPostAction = (json) => {
  return { type: CREATE_POST, payload: json };
};

/* {
    id: 1,
    title: '...',
    body: '...',
    userId: 1
  } */

const postReducer = (state = [], action = {}) => {
  switch (action.type) {
    /* case GET_POST_BY_ID: {
      fetch(`https://jsonplaceholder.typicode.com/posts/${action.payload}`)
        .then((response) => response.json())
        .then((json) => {
          console.log("GET_POST_BY_ID: ok");
          result = json;
        })
        .catch((error) => console.error(error));
      return [{ ...result }];
    } */
    case GET_POSTS: {
      return [...action.payload];
    }
    /* case DELETE_POST: {
      fetch(`https://jsonplaceholder.typicode.com/posts/${action.payload}`, {
        method: "DELETE",
      })
        .then((response) => console.log("DELETE_POST: ok"))
        .catch((error) => console.error(error));
      return state.filter((post) => {
        if (post.id === action.payload) return false;
        return true;
      });
    } */
    case LISTING_NESTED_POST: {
      return [...action.payload];
    }
    case CLEAR_POSTS: {
      return [];
    }
    case CREATE_POST: {
      return [...state, { ...action.payload }];
    }
    default: {
      // Костыль через жопный
      /* console.log("POST_REDUCER_DEFAULT: ok");
      if (action?.payload && action?.payload !== null)
        return [...action.payload];
 */
      return [...state];
    }
  }
};

// getAllPosts is the "thunk action creator"
export function getAllPosts() {
  // getAllPosts is the "thunk function"
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      console.log("GET_POSTS: ok");
      store.dispatch(getPostsAction(json));
    })
    .catch((error) => console.error(error));
}
export function getPostsComments(id) {
  // This is equivalent to /comments?postId=1
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((response) => response.json())
    .then((json) => {
      console.log("LISTING_NESTED_POST: ok");
      store.dispatch(getCommentsAction(json));
    })
    .catch((error) => console.error(error));
}
export function createPost(
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
    .then((json) => store.dispatch(createPostAction(json)))
    .catch((error) => console.error(error));
}
export default postReducer;
