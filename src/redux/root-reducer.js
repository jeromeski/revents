import { combineReducers } from "redux";
import { reducer as FormReducer } from 'redux-form';
import { reducer as ToastrReducer } from 'react-redux-toastr';
import testReducer from "../features/test-area/testReducer";
import eventReducer from "./events/eventReducer";
import modalReducer from "../features/modals/modalReducer";
import authReducer from "../features/auth/authReducer";
import asyncReducer from "./async/asyncReducer";


export default combineReducers({
  form: FormReducer,
  test: testReducer,
  events: eventReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
  toastr: ToastrReducer
});