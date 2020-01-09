import { combineReducers } from "redux";
import testReducer from "../features/test-area/testReducer";

export default combineReducers({
  test: testReducer
});