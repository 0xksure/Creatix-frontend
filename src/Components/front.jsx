import React from "react";

class Front extends React.Component {
  render() {
    return (
      <div className="grid-container-full">
        <div className="grid-x about-creatix bg-gradient-creatix-front-box">
          <div className="cell small-6 medium-6 large-6  creatix-sheet-block">
            <div className="creatix-sheet-content">
              <h1>Focus on what you know best</h1>
              <p>
                Creatix is all about creating your new idea by focusing on what
                you know best. It also offers the opportunity to share your
                ideas. In this way you can easily discover the market, investor
                interest and potential cofounders.
              </p>
              <button>Get started, Yes!</button>
            </div>
          </div>
        </div>
        <div class="grid-x">
          <div class="cell small-6 medium-6 small-6 idea-card-left">
            <h2> #1 Write down your idea</h2>
          </div>
        </div>
        <div class="grid-x">
          <div class="cell small-6 medium-6 small-6 idea-card-right">
            <h2> #2 Investigate your idea</h2>
          </div>
        </div>
        <div class="grid-x">
          <div class="cell small-6 medium-6 small-6 idea-card-left">
            <h2> #3 Share your idea</h2>
          </div>
        </div>
        <div class="grid-x">
          <div class="cell small-6 medium-6 small-6 idea-card-right">
            <h2> #4 Gather your team </h2>
          </div>
        </div>
        <div class="grid-x">
          <div class="cell small-6 medium-6 small-6 idea-card-center">
            <h2> #5 Start </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Front;
