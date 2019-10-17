import React from "react";
import PropTypes from "prop-types";
import SkillBars from "../Icons/SkillBars";

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

Skill.defaulProps = {
  className: ""
};
Skill.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
};

function BaseballCard() {
  return (
    <div className="grid-x baseball-card">
      <div className="cell small-12">
        <h4 className="h4">Some name</h4>
      </div>
      <div className="cell small-12">
        <p className="p bold margin-zero">Creative Designer </p>
        <Skill className="horizontal" percentage={80}>
          <p className="p margin-zero margin-right-m">Experience</p>
        </Skill>
      </div>
      <div className="cell small-12 split-view">
        <div className="grid-x">
          <div className="cell small-12">
            <p className="p bold margin-zero padding-zero">Skills</p>
            <Skill percentage={80}>
              <p className="p margin-zero">UI</p>
            </Skill>
            <Skill percentage={20}>
              <p className="p margin-zero">Figma</p>
            </Skill>
          </div>
          <div className="cell small-6">
            <p className="p bold margin-zero">Interests </p>
            <p className="p medium-text"> Material design</p>
            <p className="p medium-text"> Wireframes</p>
          </div>
        </div>
      </div>
      <div className="cell small-12 topic-boxes">
        <p className="p topic-box">UI</p>
        <p className="p topic-box">Figma</p>
      </div>
    </div>
  );
}

export default BaseballCard;
