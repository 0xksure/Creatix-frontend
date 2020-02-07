import React from "react";

import Overview from "./Icons/Overview";
import TeamCard from "./Icons/TeamCard";
import FeedbackStacked from "./Icons/FeedbackStacked";

const CARD_TEXT_1 =
  "Let employees share feedback, ideas and actions that will help your business improve";

const CARD_TEXT_2 = "Find central people in your organization and teams";

const CARD_TEXT_3 =
  "Employee cards provide information on skills and interest that would help your create an all start team.";

function Features() {
  return (
    <div className="grid-x grid-padding-x creatix-features">
      <div className="cell small-12 medium-12-large-12 creatix-feature-statement">
        <h2 className="h2" id="home_features_main_text">
          Discover the product
        </h2>
      </div>
      <div className="cell small-12 medium-12 large-12 ">
        <div className="grid-x grid-margin-x">
          <div className="cell small-12 medium-4 large-4 creatix-card">
            <FeedbackStacked className="product-icon" />
            <h2 className="h2 medium-font small-font" id="home_features_feedback_main">
              ampFeedback
            </h2>
            <p className="p" id="home_features_feedback_card_text">
              {CARD_TEXT_1}
            </p>
          </div>
          <div className="cell small-12 medium-4 large-4 creatix-card">
            <Overview className="product-icon" />
            <h2 className="h2 medium-font small-font" id="home_features_overview_main">
              ampOverview
            </h2>
            <p className="p" id="home_features_overview_card_text">
              {CARD_TEXT_2}
            </p>
          </div>
          <div className="cell small-12 medium-4 large-4 creatix-card">
            <TeamCard className="product-icon" />
            <h2 className="h2 medium-font small-font" id="home_features_teams_main">
              ampTeams
            </h2>
            <p className="p" id="home_features_teams_card_text">
              {CARD_TEXT_3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
