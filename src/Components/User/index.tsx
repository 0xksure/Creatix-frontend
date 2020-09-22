import React from "react";
import { useSelector } from "react-redux";
import NumberOfFeedback from "Components/Feedback/NumberOfFeedback";

const UserHome: React.FC = () => {
  const auth = useSelector((state) => state.Auth);
  const feedback = useSelector((state) => state.Feedback);

  return (
    <div className="grid-x">
      <div className="cell-12">
        <h2>{`Good morning ${`${auth.firstname} ${auth.lastname}`}`}</h2>
      </div>
      <div className="cell small-12">
        <NumberOfFeedback feedbacks={feedback.feedbacks} />
      </div>
    </div>
  );
};

export default UserHome;
