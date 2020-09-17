import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { StaticRouter } from "react-router";
import { Clap, ClapAnimation } from "../Animations/Clap";
import { Comment, CommentAnimation } from "../Animations/Comment";
import Modal from "../Modals";
import FloatingMaterial from "../Buttons/FloatingMaterial";
import { clapFeedback } from "../../Actions/Feedback";

function Feedback() {
  const feedback = useSelector(state => state.Feedback);
  return (
    <div className="grid-x">
      <SearchFeedbacks />
      <FeedbackList feedbacks={feedback.feedbacks} />
      <FeedbackModal feedback={feedback.feedbacks} />
    </div>
  );
}

export default Feedback;
