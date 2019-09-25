import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HomeStatement from "./HomeStatement";
import Features from "./Features";

function Home({ modalIsOpen }) {
  const blurClass = modalIsOpen ? "blur-on-modal" : "";
  if (modalIsOpen) {
  }
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  });
  return (
    <div className={`grid-container-full ${blurClass}`}>
      <HomeStatement />
      <Features />
    </div>
  );
}

Home.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    modalIsOpen: state.modal.modalIsOpen
  };
}

export default connect(
  mapStateToProps,
  null
)(Home);
