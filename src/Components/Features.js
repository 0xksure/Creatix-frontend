import React from "react";

import { HashLink as Link } from "react-router-hash-link";
import Idea from "./Icons/Idea";
import Investigate from "./Icons/Investigate";
import Share from "./Icons/Share";
import Overview from "./Icons/Overview";
import TeamCard from "./Icons/TeamCard";
import FeedbackStacked from "./Icons/FeedbackStacked";
import { BlowUpOnHover } from "./Animations";

const CARD_TEXT_1 =
  "Let employees share feedback, ideas and actions that will help your business improve";

const CARD_TEXT_2 = "Find central people in your organization and teams";

const CARD_TEXT_3 =
  "Employee cards provide information on skills and interest that would help your create an all start team.";

function Features() {
  return (
    <div className="grid-x grid-padding-x creatix-features">
      <div className="cell small-12 medium-12-large-12 creatix-feature-statement">
        <h2 className="h2">Discover the product</h2>
      </div>
      <div className="cell small-12 medium-12 large-12 ">
        <div className="grid-x grid-margin-x">
          <div className="cell small-12 medium-4 large-4 creatix-card">
            <BlowUpOnHover>
              <FeedbackStacked className="product-icon" />
            </BlowUpOnHover>
            <h1 className="h1 bold-font">Feedback</h1>
            <p className="p">{CARD_TEXT_1} </p>
          </div>
          <div className="cell small-12 medium-4 large-4 creatix-card">
            <Overview className="product-icon" />
            <h1 className="h1 medium-font ">Overview </h1>
            <p className="p">{CARD_TEXT_2} </p>
          </div>
          <div className="cell small-12 medium-4 large-4 creatix-card">
            <TeamCard className="product-icon" />
            <h1 className="h1 bold-font">Teams </h1>
            <p className="p">{CARD_TEXT_3} </p>
          </div>
        </div>
      </div>
      <div className="cell small-12">
        <Link to="/discover#header">
          <div className="creatix-btn secondary center">
            <div className="grid-x">
              <div className="cell small-12">
                <h4 className="h4">Discover Creatix</h4>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Features;
