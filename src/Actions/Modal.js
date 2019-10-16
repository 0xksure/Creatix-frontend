import { OPEN_MODAL } from "../Constants";

export function toggleModal(modalIsOpen) {
  return {
    type: OPEN_MODAL,
    modalIsOpen
  };
}
