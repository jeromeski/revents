import eventsData from "../../eventsData";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./eventConstants";

const INITIAL_STATE = eventsData;

const eventReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {

    case CREATE_EVENT:
      return [...state, action.payload.event]

    case UPDATE_EVENT:
      return [...state.filter(event => event.id !== action.payload.event.id), action.payload.event
      ]
    
    case DELETE_EVENT:
      return [...state.filter(event => event.id !== action.payload.eventId)]
    
    default:
      return state 
  }
}


export default eventReducer;