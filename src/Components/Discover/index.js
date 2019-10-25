import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FeedbackDemo from "../FeedbackDemo";
import BaseballCard from "../BaseballCard";
import AmpOverview from "../Overview";
import { useWindowSize } from "../../Utils/Hooks";

const FEEDBACK_MAIN = "ampFeedback";

const FEEDBACK_SUB_TEXT =
  "Take feedback to a new level by amping ideas and suggestions. Easily amp feedback you find crucial for the growth of the company. ";

const OVERVIEW_MAIN = "ampOverview";
const OVERVIEW_SUB_TEXT =
  "A birds eye view of the company has to this date been illustrated in obsolete documents hidden somewhere on the intranet. With an amped overview together with skill cards it is easier than ever to find people significant to your task.";

const CARDS_MAIN = "ampEmployees";
const CARDS_SUB_TEXT =
  "Let employees own their achievements. Over time skills can be amped or changed. By using skill cards it becomes easier to create well balanced and functional teams.";

function Discover() {
  const modalIsOpen = useSelector(
    state => state.Modal.modalIsOpen,
    shallowEqual
  );
  const blurClass = modalIsOpen ? "blur-on-modal" : "";
  const size = useWindowSize();
  return (
    <fragment>
      <Helmet>
        <meta
          name="description"
          content="Creatix discover the various products, feedback cards, transparency overview and team cards."
        />
      </Helmet>
      <div className={`grid-container full ${blurClass}`}>
        <div className="grid-x big-statement">
          <div className="cell small-12 medium-12 large-6">
            <h1 className="h1">
              Empower your employees in improving the business
            </h1>
          </div>
        </div>
        <Banner
          id="feedback"
          mainText={FEEDBACK_MAIN}
          subText={FEEDBACK_SUB_TEXT}
          bannerStyle="strong-blue"
          element={<FeedbackDemo />}
        />
        <Banner
          id="transparency"
          mainText={OVERVIEW_MAIN}
          subText={OVERVIEW_SUB_TEXT}
          leftPos={size.width < 450}
          element={<AmpOverview />}
        />
        <Banner
          id="teamcards"
          mainText={CARDS_MAIN}
          subText={CARDS_SUB_TEXT}
          bannerStyle="strong-pink"
          element={<BaseballCard />}
        />
      </div>
    </fragment>
  );
}

export default Discover;
