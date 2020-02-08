import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./test-types"
import { ASYNC_ACTION_START } from "../../redux/async/asyncConstants"
import { asyncActionFinish } from "../../redux/async/asyncActions"



export const incrementCounter = () => ({
  type: INCREMENT_COUNTER
})

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER
})

const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const incrementAsync = (name) => {
  return async dispatch => {
    dispatch({type: ASYNC_ACTION_START, payload: name})
    await delay(1000)
    dispatch(incrementCounter())
    dispatch(asyncActionFinish())
  };
};

export const decrementAsync = (name) => {
  return async dispatch => {
    dispatch({type: ASYNC_ACTION_START, payload: name})
    await delay(1000)
    dispatch({type: DECREMENT_COUNTER})
    dispatch(asyncActionFinish())
  };
};