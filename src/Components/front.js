import React from 'react';

// Redux
import { connect } from 'react-redux';
import { CardVisibility } from '../Actions';
import PropTypes from 'prop-types';

// Import router
import { NavLink, Link } from 'react-router-dom';

import Idea from '../styles/svg/Idea.svg';

import Investigate from '../styles/svg/Investigate.svg';
import Share from '../styles/svg/Share.svg';

import GatherTeam from '../styles/svg/GatherTeam.svg';
import Start from '../styles/svg/Start.svg';

class Front extends React.Component {
  constructor(props) {
    super(props);
    console.log('props');
    console.log(props);
    this.state = {
      activeComponent: ''
    };
  }

  componentDidUpdate(props) {
    console.log('Update');
    console.log(props);
  }

  componentDidMount() {
    console.log('Did Mount ');
  }

  componentWillMount() {
    console.log('WIll mount');
  }

  componentWillReceiveProps(props) {
    console.log('Will receive props');
    console.log(props);
    this.setState(prevState => {
      return {
        ...prevState,
        activeComponent: props.match.params.topic
      };
    });
  }
  isComponentActive(componentName) {
    return this.state.activeComponent === componentName;
  }

  setActiveComponent(componentName) {
    const activeComponentName =
      this.state.activeComponent === componentName ? '' : componentName;
    this.setState(prevState => {
      return {
        ...prevState,
        activeComponent: activeComponentName
      };
    });
  }

  showAboutComponent(componentName) {
    const hide = this.state.activeComponent !== componentName ? 'hide' : '';
    return (
      <div className={'cell small-12 medium-12 large-12 banner ' + hide}>
        <h1 className="h1">Share is important </h1>
      </div>
    );
  }

  render() {
    return (
      <div className="grid-container-full main-container">
        <div className="grid-x">
          <div className="cell small-6 medium-6 large-6  creatix-sheet-block">
            <div className="creatix-sheet-content">
              <h1 className="h1 h1__bold">
                Business innovation made intelligent
              </h1>
              <p className="p">
                Creatix is all about creating your new idea by focusing on what
                you know best. It also offers the opportunity to share your
                ideas. In this way you can easily discover the market, investor
                interest and potential cofounders.
              </p>
            </div>
          </div>
        </div>
        <div class="grid-x">
          <div class="cell small-12 medium-12 large-12 ">
            <div className="grid-x grid-margin-x idea-cards-grid">
              <div className="cell small-4 medium-4 large-4 idea-card">
                <Link to="/main/invent">
                  <div className="grid-x">
                    <div className="cell large-2 logo">
                      <Idea width={50} height={50} className="logo" />
                    </div>
                    <div className="cell auto idea-card-content">
                      <h1 className="h1">Invent</h1>
                      <p className="p p-card">
                        Establish you company as where employees are encouraged
                        to invent and be experimental. to Possible for employees
                        with an entrepreneur spirit to invent from inside the
                        company whence giving them the security of an
                        established company but with the opportunity to create.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="cell small-4 medium-4 large-4 idea-card">
                <div className="grid-x">
                  <div className="cell large-2 logo">
                    <Investigate width={50} height={50} className="logo-top" />
                  </div>
                  <div className="cell auto idea-card-content">
                    <h1 className="h1">Investigate </h1>
                    <p className="p p-card">
                      Use key resources in your business and potential customers
                      to find out if the idea might useful.
                    </p>
                  </div>
                </div>
              </div>
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
                        Share your idea with your colleague and assemble your
                        team.
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
                      By crowdsourcing ideas internally people get to discover
                      what is happening in the company and have a say in the
                      development of the business. This is provides radical
                      transparency. Additionally people with area expertise have
                      to weight in on the idea in order to assess the validity
                      of the hypothesis and possible marked for the product.
                      Colleague also have the opportunity to evaluate whether
                      they share the same enthusiasm for the idea.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div class="grid-x align-center fat-banner-grid">
          <div class="cell small-6 medium-6 small-6 fat-banner-grid__center-box ">
            <div className="grid-x">
              <div className="cell large-2">
                <GatherTeam width={100} height={100} className="logo-center" />
              </div>
              <div className="cell auto idea-card-content">
                <h1 className="h1"> Gather Your team </h1>
                <p className="p">
                  Based on the business profiles a team with high probabilty of
                  success can be assembled. With business AI. By creating a
                  profile based on interests, favorite activites and skills it's
                  possible to compose teams with diversity and skills to deliver
                  on the MVP. Based on the profiles it is possible to assist in
                  developing the employee.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="grid-x align-center fat-banner-grid">
          <div class="cell small-6 medium-6 small-6 fat-banner-grid__center-box">
            <div className="grid-x">
              <div className="cell large-2 ">
                <Start width={50} height={50} className="logo-center" />
              </div>
              <div className="cell auto idea-card-content">
                <h1 className="h1"> Start </h1>
                <p className="p">
                  By using principles from agile development evertyhing
                  necessary to build an MVP will be put in place. All you have
                  to do is to split the project into tasks and stories. During
                  development it is possible for whomever to follow the progress
                  and eventually the result of the MVP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Front.propTypes={
  selectedIdeaCard: PropTypes.string.isRequired
}

function mapStateToProps(state){
  const {}
}

export default Front;
