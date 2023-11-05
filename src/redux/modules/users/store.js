//import {createStore} from "redux";

import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducers/postReducer";
//import { combineReducers } from "@reduxjs/toolkit";
import getCachePosts from "./reducers/getPosts";
import dynamicComponent from "./reducers/dynamicComponent";

const store = configureStore({
  reducer: { postReducer, getCachePosts, dynamicComponent },
});

//store.subscribe(() => console.log(store.getState()));

export default store;
