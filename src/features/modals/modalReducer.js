import { createReducer } from "../../app/common/util/reducerUtils";
import { MODAL_OPEN, MODAL_CLOSE } from "./modalConstants";
// import { openModal } from "./modalActions";

// const initialState = null;


// const modalReducer = (state= initialState, action) => {
//   const {modalType, modalProps} = openModal
//   switch(action.type) {
//     case MODAL_OPEN: {
//       return {modalType, modalProps}
//     }
//     case MODAL_CLOSE: {
//       return null
//     }
//     default:
//       return state
//   }
// }

// export default modalReducer;

const initialState = null;

const openModal = (state, payload) => {
  const {modalType, modalProps} = payload;
  return {modalType, modalProps}
}

const closeModal = (state) => {
  return null
}

export default createReducer(initialState, {
  [MODAL_OPEN]: openModal,
  [MODAL_CLOSE]: closeModal
})