import React, { useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import HomeStatement from "./HomeStatement";
import Features from "./Features";

const Home: React.FC = () => {
  const modalIsOpen = useSelector(
    (state) => state.Modal.modalIsOpen,
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
};

export default Home;
