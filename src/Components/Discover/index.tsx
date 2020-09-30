import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import Banner from 'Components/Discover/Banner';
import { useWindowSize } from '../../Utils/Hooks';
import {
  MISSION_STATEMENT,
  FEEDBACK_MAIN,
  FEEDBACK_SUB_TEXT,
  OVERVIEW_MAIN,
  OVERVIEW_SUB_TEXT,
  CARDS_MAIN,
  CARDS_SUB_TEXT,
} from 'Components/Discover/constants';

interface Props {
  name: string;
}
const Discover: React.FC<Props> = () => {
  const modalIsOpen = useSelector((state) => state.Modal.modalIsOpen, shallowEqual);
  const blurClass = modalIsOpen ? 'blur-on-modal' : '';
  const size = useWindowSize();
  const widthSize = size?.width ?? 1000;
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
        <div className="grid-x margin-bottom-l  ">
          <div className="cell small-12 medium-12 large-6 padding-vertical-l">
            <h1 className="h1" id="discover_main_text">
              {MISSION_STATEMENT}
            </h1>
          </div>
        </div>
        <div className=" ">
          <Banner
            id="discover_feedback"
            mainText={FEEDBACK_MAIN}
            subText={FEEDBACK_SUB_TEXT}
            bannerStyle="text-align full-height"
          />
          <Banner
            id="discover_transparency"
            mainText={OVERVIEW_MAIN}
            subText={OVERVIEW_SUB_TEXT}
            bannerStyle="text-align full-height"
          />
          <Banner
            id="discover_teamcards"
            mainText={CARDS_MAIN}
            subText={CARDS_SUB_TEXT}
            bannerStyle="text-align full-height"
          />
        </div>
      </div>
    </>
  );
};

export default Discover;
