import { combineReducers } from "redux";
import counter from "./counter/counter";
import posts from "./posts";

const rootReducer = combineReducers({ counter, posts });

export default rootReducer;
