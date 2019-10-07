import React, { useEffect } from "react";
import { connect } from "react-redux";
import Banner from "./Banner";
import FeedbackDemo from "./../FeedbackDemo";
import BaseballCard from "./../BaseballCard";

function Discover({ modalIsOpen }) {
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
    <div className={`grid-container full ${blurClass}`}>
      <div className="grid-x big-statement">
        <div className="cell small-12 medium-12 large-6">
          <h1 className="h1">
            Empower your employees in improving the business
          </h1>
        </div>
      </div>
      <Banner
        id="feedback"
        mainText={"Why feedback?"}
        subText={
          "For your employee, values and culture are. The sense of being heard and have their feedback considred valuable. A great way to build a culture that supports innovation and efficiency is to let employees be heard."
        }
        bannerStyle={"strong-blue"}
        element={<FeedbackDemo />}
      />
      <Banner
        id="transparency"
        mainText={"Why transparency?"}
        subText={"Transparency"}
        cellPosition={" large-offset-9"}
        bannerStyle={"gray"}
      />
      <Banner
        id="teamcards"
        mainText="Why team cards?"
        subText="Team cards .."
        bannerStyle={"strong-pink"}
        element={<BaseballCard />}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    modalIsOpen: state.modal.modalIsOpen
  };
}

export default connect(
  mapStateToProps,
  null
)(Discover);
