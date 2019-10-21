import React, { useEffect } from "react";
import { connect, useSelector, shallowEqual } from "react-redux";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import Banner from "./Banner";
import FeedbackDemo from "../FeedbackDemo";
import BaseballCard from "../BaseballCard";

const FEEDBACK_MAIN = "Why feedback?";
const FEEDBACK_SUB_TEXT =
  "For your employee, values and culture are. The sense of being heard and have their feedback considred valuable. A great way to build a culture that supports innovation and efficiency is to let employees be heard.";

const OVERVIEW_MAIN = "Why overview?";
const OVERVIEW_SUB_TEXT = "";

const CARDS_MAIN = "Why Team Cards?";
const CARDS_SUB_TEXT = "Team cards";

function Discover() {
  const modalIsOpen = useSelector(
    state => state.Modal.modalIsOpen,
    shallowEqual
  );
  const blurClass = modalIsOpen ? "blur-on-modal" : "";
  return (
    <fragment>
      <Helmet>
        <meta
          name="description"
          content="Creatix discover the various products, feedback cards, transparency overview and team cards."
        />
      </Helmet>
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
          mainText={FEEDBACK_MAIN}
          subText={FEEDBACK_SUB_TEXT}
          bannerStyle="strong-blue"
          element={<FeedbackDemo />}
        />
        <Banner
          id="transparency"
          mainText={OVERVIEW_MAIN}
          subText={OVERVIEW_SUB_TEXT}
          cellPosition=" large-offset-9"
          bannerStyle="gray"
        />
        <Banner
          id="teamcards"
          mainText={CARDS_MAIN}
          subText={CARDS_SUB_TEXT}
          bannerStyle="strong-pink"
          element={<BaseballCard />}
        />
      </div>
    </fragment>
  );
}

export default connect(
  null,
  null
)(Discover);
