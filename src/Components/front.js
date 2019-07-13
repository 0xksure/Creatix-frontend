import React from 'react';

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
      currentComponent: ''
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
        currentComponent: props.match.params.topic
      };
    });
  }

  moreAboutInvent() {
    const hide = this.state.currentComponent === 'invent' ? '' : 'hide';

    return <div className={hide}>Hello here is more about invent</div>;
  }

  render() {
    return (
      <div className="grid-container-full main-container">
        <div className="grid-x about-creatix bg-gradient-creatix-front-box">
          <div className="cell small-6 medium-6 large-6  creatix-sheet-block">
            <div className="creatix-sheet-content">
              <h1>Business innovation made intelligent</h1>
              <p>
                Creatix is all about creating your new idea by focusing on what
                you know best. It also offers the opportunity to share your
                ideas. In this way you can easily discover the market, investor
                interest and potential cofounders.
              </p>
            </div>
          </div>
        </div>
        <div class="grid-x">
          <div class="cell small-12 medium-12 large-12 idea-cards-banner">
            <div className="grid-x grid-margin-x idea-cards-grid">
              <div className="cell small-4 medium-4 large-4 idea-card">
                <Link to="/main/invent">
                  <div className="grid-x">
                    <div className="cell large-2 logo">
                      <Idea width={50} height={50} className="logo" />
                    </div>
                    <div className="cell auto idea-card-content">
                      <h1 className="h1">Invent</h1>
                      <p className="p">
                        Discover potential ideas that would improve the
                        business. Specify your brand new idea and how the end
                        result would look like.
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
                    <p className="p">
                      Use key resources in your business and potential customers
                      to find out if the idea might useful.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cell small-4 medium-4 large-4 idea-card">
                <div className="grid-x">
                  <div className="cell large-2 logo">
                    <Share width={50} height={50} className="logo-top" />
                  </div>
                  <div className="cell auto idea-card-content">
                    <h1 className="h1">Share </h1>
                    <p className="p">
                      Share your idea with your collegeuse and assemble your
                      team .
                    </p>
                  </div>
                </div>
              </div>
              {this.moreAboutInvent()}
            </div>
          </div>
        </div>
        <div class="grid-x align-center fat-banner-grid">
          <div class="cell small-6 medium-6 small-6 fat-banner-grid__center-box">
            <div className="grid-x">
              <div className="cell large-2">
                <GatherTeam width={100} height={100} className="logo-center" />
              </div>
              <div className="cell auto idea-card-content">
                <h1 className="h1"> Gather Your team </h1>
                <p className="p">
                  Based on the business profiles a team with high probabilty of
                  success can be assembled. With business AI.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="grid-x align-center fat-banner-grid">
          <div class="cell small-6 medium-6 small-6 fat-banner-grid__center-box">
            <div className="grid-x">
              <div className="cell large-2 ">
                <Start width={100} height={100} className="logo-center" />
              </div>
              <div className="cell auto idea-card-content">
                <h1 className="h1"> Start </h1>
                <p className="p">
                  By using principles from agile development evertyhing
                  necessary to build an MVP will be put in place. All you have
                  to do is to split the project into tasks and stories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Front;
