const SWITCH_TO_LISTING_POSTS = "listing/posts";
const SWITCH_TO_CREATE_POST = "create/post";
const SWITCH_TO_COMMENTS = "get/comments";
const SWITCH_TO_FOTOS = "get/fotos";

const dynamicComponent = (
  state = { nameDynamicComponent: "Posts" },
  action = { type: "", payload: null }
) => {
  switch (action.type) {
    case SWITCH_TO_LISTING_POSTS: {
      return { ...state, nameDynamicComponent: "Posts" };
    }
    case SWITCH_TO_CREATE_POST: {
      return { ...state, nameDynamicComponent: "Form" };
    }
    case SWITCH_TO_COMMENTS: {
      return { ...state, nameDynamicComponent: "Comments" };
    }
    case SWITCH_TO_FOTOS: {
      return { ...state, nameDynamicComponent: "Fotos" };
    }
    default: {
      return { ...state };
    }
  }
};

//Action creators
export const setPostComponentAction = () => {
  return { type: SWITCH_TO_LISTING_POSTS, payload: null };
};
export const setFormComponentAction = () => {
  return { type: SWITCH_TO_CREATE_POST, payload: null };
};
export const setCommentComponentAction = () => {
  return { type: SWITCH_TO_COMMENTS, payload: null };
};
export const setFotosComponentAction = () => {
  return { type: SWITCH_TO_FOTOS, payload: null };
};

export default dynamicComponent;
