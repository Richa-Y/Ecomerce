import { combineReducers } from "redux";
import posts from "./posts";
import data from "./data";
export default combineReducers({
  posts,
  data,
});
