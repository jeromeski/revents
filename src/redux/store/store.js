import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../root-reducer";
import thunk from "redux-thunk";

const middlewares = [thunk]

const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares))

const store = createStore(rootReducer, composedEnhancer);

export default store;
