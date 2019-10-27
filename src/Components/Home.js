import React, { useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { HashLink as Link } from "react-router-hash-link";
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
      <div className="grid-x margin-top-small">
        <div className="cell small-12">
          <Link to="/discover#header" id="discover_tenxamp_button">
            <div className="creatix-btn secondary center">
              <div className="grid-x">
                <div className="cell small-12">
                  <h4 className="h4">Discover tenXamp</h4>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {};

export default Home;
