import React, { useEffect } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import PropTypes from "prop-types";
import HomeStatement from "./HomeStatement";
import Features from "./Features";

function Home() {
  const modalIsOpen = useSelector(
    state => state.Modal.modalIsOpen,
    shallowEqual
  );
  const blurClass = modalIsOpen ? "blur-on-modal" : "";
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

Home.propTypes = {};

export default Home;
