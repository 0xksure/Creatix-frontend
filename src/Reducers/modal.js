import { OPEN_MODAL } from "../Constants";

const initialState = {
  modalIsOpen: false
};

export default function Modal(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        modalIsOpen: action.modalIsOpen
      };
    default:
      return state;
  }
}
