import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./test-types"
import { asyncActionStart, asyncActionFinish } from "../async/asyncActions"


export const incrementCounter = () => ({
  type: INCREMENT_COUNTER
})

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER
})

const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const incrementAsync = () => {
  return async dispatch => {
    dispatch(asyncActionStart())
    await delay(1000)
    dispatch(incrementCounter())
    dispatch(asyncActionFinish())
  };
};

export const decrementAsync = () => {
  return async dispatch => {
    dispatch(asyncActionStart())
    await delay(1000)
    dispatch({type: DECREMENT_COUNTER})
    dispatch(asyncActionFinish())
  };
};