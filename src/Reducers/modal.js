import { TOGGLE_MODAL } from "../Constants";

const initialState = {
  modalIsOpen: false
};

export default function Modal(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        modalIsOpen: !state.modalIsOpen
      };
    default:
      return state;
  }
}
