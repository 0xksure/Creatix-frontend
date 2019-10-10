import React from 'react';
import PropTypes from 'prop-types';

class CellExpand extends React.Component {
  render() {
    return (
      <div>
        <div
          className={
            'cell small-4 medium-4 large-4 idea-card ' +
            (this.isComponentActive('share') ? 'idea-card-selected' : '')
          }
          onClick={() => this.setActiveComponent('share')}
        >
          <Link to="/main/share">
            <div className="grid-x">
              <div className="cell large-2 logo">
                <Share width={50} height={50} className="logo-top" />
              </div>
              <div className="cell auto idea-card-content">
                <h1 className="h1">Share </h1>
                <p className="p p-card">
                  Share your idea with your colleague and assemble your team.
                </p>
              </div>
            </div>
          </Link>
        </div>
        {this.isComponentActive('share') && (
          <div className="cell small-12 medium-12 large-12 banner">
            <div className="banner-content">
              <h1 className="h1">Sharing is Caring </h1>
              <p className="p">
                By crowdsourcing ideas internally people get to discover what is
                happening in the company and have a say in the development of
                the business. This is provides radical transparency.
                Additionally people with area expertise have to weight in on the
                idea in order to assess the validity of the hypothesis and
                possible marked for the product. Colleague also have the
                opportunity to evaluate whether they share the same enthusiasm
                for the idea.
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
