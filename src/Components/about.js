import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="grid-container-full main-container ">
        <div className="grid-x shift-right">
          <div className="cell small-6 medium-6 large-6 floating-text">
            <h1 className="h1">Creatix Mission</h1>
            <p className="p">
              The goal of Creatix is to make it easier for any company to start
              inventing from inside. This will empower the employees to take
              full ownership of idea creation, business and ultimately their own
              career progressions.
            </p>
          </div>
          <div className="cell small-6 medium-6 large-6 ">
            <h1 className="h1">Baseball cards</h1>
            <div className="bboxes">
              <div className="bbox">
                <p className="p__small">
                  Based on concepts like baseball cards and agile development we
                  believe it would be possible for companies of any size to
                  innovate faster with greater success.
                </p>
              </div>
              <div className="bbox">
                <p className="p p__small">
                  It would therefore become easier to assemble great diverse
                  teams. This team will become the founders and work exclusively
                  on the problem or idea for a period of time.
                </p>
              </div>
            </div>
          </div>
          <div className="cell auto">Baseball card illustration</div>
          <div className="cell">
            <h1>Idea crowdsourcing </h1>
            By crowdsourcing ideas from inside the organization employees will
            have greater ownership of business development. This will also let
            employees be inside entrepreneurs, hence having the safety of the
            company but not sacrificing on agility and innovation. These ideas
            will be compared to similar promoted initiatives and previous
            pursued ideas. This will provide baseline for the risk of the idea
            and the general popularity.
          </div>
          <div className="cell">
            <h1>The power of why</h1>
            As ideas are promoted collegues with area expertise can comment on
            the idea and provide valuable feedback on the validity of the idea.
          </div>
          <div className="cell">
            <h1>GO!</h1>
            When the idea is approved for development a team will be assembled
            based on the baseball cards. A clear timeline with a MVP goal will
            be established. The MVP will be dissembled into tasks that needs to
            be done in order to reach the goal.
          </div>
          <div className="cell">
            <h1>Retrospective</h1>
            At the end of the period the MVP should be presented and evaluated.
          </div>
        </div>
      </div>
    );
  }
}

export default About;
