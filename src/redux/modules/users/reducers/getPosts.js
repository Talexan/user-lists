import { cachePosts } from "../cache";

const GET_POSTS_FROM_CACHE = "GET_POSTS_FROM_CACHE";
const CLEAR_POSTS = "CLEAR_POSTS";

function getCachePosts(state = [], action = { type: "NO_ACTION" }) {
  switch (action.type) {
    case GET_POSTS_FROM_CACHE: {
      //console.log("GET_POSTS_FROM_CACHE: ok");
      return [...cachePosts];
    }
    case CLEAR_POSTS: {
      return [];
    }
    default: {
      return state;
    }
  }
}

export function getCachePostsAction() {
  return { type: GET_POSTS_FROM_CACHE, payload: null };
}

export function clearAllPostsAction() {
  return { type: CLEAR_POSTS, payload: null };
}

export default getCachePosts;
