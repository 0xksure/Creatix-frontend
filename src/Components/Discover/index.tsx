import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { content } from 'Components/textContent';
import FeatureCard from 'Components/Elements/FeatureCard';

const Discover: React.FC = () => {
  const modalIsOpen = useSelector((state) => state.Modal.modalIsOpen, shallowEqual);
  const blurClass = modalIsOpen ? 'blur-on-modal' : '';
  return (
    <>
      <Helmet>
        <title>Discover</title>
        <meta
          name="description"
          content="Creatix discover the various products, feedback cards, transparency overview and team cards."
        />
      </Helmet>
      <div className={`grid-container full ${blurClass}`}>
        <div className="grid-x big-statement align-center">
          <div className="cell small-12 medium-12 large-12">
            <h1 className="h1" id="discover_main_text">
              Discover how Creatix can improve your business
            </h1>
            <p className="p large">{content.discover.discoverWhyDescription}</p>
          </div>
        </div>
        <div className="gray">
          <div className="grid-x align-center">
            <h2 className="h2 margin-bottom-m">Features that will improve your day</h2>
            <FeatureCard
              id="discover_internal_feedback"
              title={content.discover.discoverInternalFeedback}
              description={content.discover.discoverInternalFeedbackDescription}
              color="blue"
            />
            <FeatureCard
              id="discover_internal_feedback"
              title={content.discover.discoverExternalFeedback}
              description={content.discover.discoverExternalFeedbackDescription}
              color="pink"
            />
            <FeatureCard
              id="discover_internal_feedback"
              title={content.discover.discoverSearch}
              description={content.discover.discoverSearchDescription}
              color="blue"
            />
            <FeatureCard
              id="discover_internal_feedback"
              title={content.discover.discoverAutomaticTagging}
              description={content.discover.discoverAutomaticTaggingDescription}
              color="pink"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
