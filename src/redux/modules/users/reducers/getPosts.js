import { cachePosts } from "../cache";

const GET_POSTS_FROM_CACHE = "GET_POSTS_FROM_CACHE";
const CLEAR_POSTS = "CLEAR_POSTS";
export const CLEAR_POST = "post/clear";

const getCachePosts = (
  state = [],
  action = { type: "NO_ACTION", payload: null }
) => {
  switch (action.type) {
    case GET_POSTS_FROM_CACHE: {
      //console.log("GET_POSTS_FROM_CACHE: ok");
      return [...cachePosts];
    }
    case CLEAR_POSTS: {
      return [];
    }
    case CLEAR_POST: {
      return hidePost(state, action);
    }
    default: {
      return state;
    }
  }
};

export function getCachePostsAction() {
  return { type: GET_POSTS_FROM_CACHE, payload: null };
}

export function clearAllPostsAction() {
  return { type: CLEAR_POSTS, payload: null };
}

export function clearPostAction(id) {
  return { type: CLEAR_POST, payload: id };
}

export function hidePost(state, action) {
  return state.filter((elem) => {
    if (elem.id === action.payload) return false;
    return true;
  });
}

export default getCachePosts;
