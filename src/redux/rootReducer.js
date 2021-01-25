import { combineReducers } from "redux";
import { appReducer } from "./reducers/appReducer";
import { postsReducer } from "./reducers/postsReducer";

export const rootReducer = combineReducers({
      posts: postsReducer,
      app: appReducer
})