import { combineReducers } from "redux";
import testReducer from "../features/test-area/testReducer";
import eventReducer from "./events/eventReducer";

export default combineReducers({
  test: testReducer,
  events: eventReducer
});