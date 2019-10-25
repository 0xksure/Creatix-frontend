import React from "react";
import PropTypes from "prop-types";
import SkillBars from "../Icons/SkillBars";
import { TopicBoxes } from "../Buttons";

function Skill({ children, className, percentage }) {
  const percentageColor = () => {
    if (percentage > 70) {
      return "green";
    }
    if (percentage > 40) {
      return "yellow";
    }
    return "red";
  };

  const percentageSkill = `${100 - percentage}%`;
  return (
    <div className={className}>
      {children}
      <SkillBars
        skillClass={`skill-bars ${percentageColor()}`}
        percentageSkill={percentageSkill}
      />
    </div>
  );
}

Skill.defaultProps = {
  className: ""
};
Skill.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
};

function BaseballCard() {
  return (
    <div className="grid-x center-content">
      <div className="cell shrink">
        <div className="grid-x baseball-card">
          <div className="cell small-12">
            <h4 className="h4">Your Name</h4>
          </div>
          <div className="cell small-12">
            <p className="p bold margin-zero">Your title </p>
            <Skill className="horizontal" percentage={80}>
              <p className="p margin-zero margin-right-m">Experience</p>
            </Skill>
          </div>
          <div className="cell small-12 split-view">
            <div className="grid-x">
              <div className="cell small-12">
                <p className="p bold margin-zero padding-zero">Skills</p>
                <Skill percentage={80}>
                  <p className="p margin-zero">Main skill</p>
                </Skill>
                <Skill percentage={20}>
                  <p className="p margin-zero">Secondary Skill</p>
                </Skill>
              </div>
            </div>
          </div>
          <TopicBoxes topics={["#Tag1", "#Tag2"]} />
        </div>
      </div>
    </div>
  );
}

export default BaseballCard;
