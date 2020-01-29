import { combineReducers } from "redux";
import { reducer as FormReducer } from 'redux-form';
import testReducer from "../features/test-area/testReducer";
import eventReducer from "./events/eventReducer";

export default combineReducers({
  form: FormReducer,
  test: testReducer,
  events: eventReducer
});