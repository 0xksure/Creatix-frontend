import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="grid-container full footer bg-gradient-creatix-footer">
        <div className="grid-x footer-content">
          <div className="cell small-4 medium-4 large-4 footer-statement">
            <h1>Creatix</h1>
            <h2>The future of business innovation</h2>
          </div>
          <div className="cell small-2 medium-2 large-2 footer-information">
            <p>Contact us</p>
            <p>About us</p>
          </div>
          <div className="cell small-2 medium-2 large-2 social-media">
            <p>Social Media</p>
          </div>
        </div>
        <div className="grid-x">
          <div className="cell small-6 medium-6 large-6">
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
