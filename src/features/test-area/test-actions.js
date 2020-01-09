import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./test-types"


export const incrementCounter = () => ({
  type: INCREMENT_COUNTER
})

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER
})