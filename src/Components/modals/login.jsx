import React from "react";
import Modal from "react-modal";
class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: this.props.modalIsOpen
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  render() {
    return (
      <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
        <h2>Hello there</h2>
        <button onClick={this.closeModal}>close </button>
      </Modal>
    );
  }
}

export default LoginModal;
