import { OPEN_MODAL } from "../Actions/modal";

const initialState = {
  modalIsOpen: false
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        modalIsOpen: action.modalIsOpen
      };
    default:
      return state;
  }
}
