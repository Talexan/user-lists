//import {createStore} from "redux";

import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducers/postReducer";
//import { combineReducers } from "@reduxjs/toolkit";
import getCachePosts from "./reducers/getPosts";

const store = configureStore({
  reducer: { postReducer, getCachePosts },
});

//store.subscribe(() => console.log(store.getState()));

export default store;
