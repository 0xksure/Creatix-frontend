import { OPEN_MODAL } from "../Constants";

export default function toggleModal(modalIsOpen) {
  return {
    type: OPEN_MODAL,
    modalIsOpen
  };
}
