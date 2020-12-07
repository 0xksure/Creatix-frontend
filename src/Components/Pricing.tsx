import React from 'react';
import { Helmet } from 'react-helmet-async';
import GatherTeamIcon from 'Components/Icons/GatherTeamIcon';
import OverviewIcon from 'Components/Icons/OverviewIcon';
import CenteredFeature from 'Components/Elements/CenteredFeature';

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Discover</title>
        <meta
          name="description"
          content="Creatix discover the various products, feedback cards, transparency overview and team cards."
        />
      </Helmet>
      <div className={`grid-container full `}>
        <div className="gray">
          <div className="grid-x align-center">
            <div className="cell small-12 medium-12  home-statement">
              <h1 className="h1 large" id="discover_main_text">
                Pricing
              </h1>
            </div>
          </div>
          <div className="grid-x grid-padding-x creatix-features">
            <CenteredFeature
              Icon={OverviewIcon}
              title={'Basic'}
              subtitle={'Free'}
              description={'The basic tier gives you 100 free user generated feedbacks'}
            />
            <CenteredFeature
              Icon={GatherTeamIcon}
              title={'Pro'}
              subtitle={'$9.99/month per user'}
              description={
                'Take you feedback serious with the pro subscription. You get unlimited feedbacks plus the ability to integrate towards an increasing number of services.'
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
