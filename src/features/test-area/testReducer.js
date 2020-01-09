import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./test-types"

const INITIAL_STATE = {
  data: 42
}

const testReducer = (state =  INITIAL_STATE, action) => {
  switch(action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        data: state.data + 1
      }   
    case DECREMENT_COUNTER:
      return {
        ...state,
        data: state.data - 1
      }
    default: return state
  }
}

export default testReducer;