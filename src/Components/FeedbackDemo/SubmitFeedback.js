import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useTransition, animated } from "react-spring";
import PropTypes from "prop-types";
import { addFeedback } from "../../Actions/FeedbackDemo";

const submitTextSentences = [
  {
    text: "ok",
    key: 1
  },
  {
    text: "hello",
    key: 2
  }
];

const ANON_USER = "Anon";
function SubmitFeedback({ add }) {
  const [items, set] = useState(submitTextSentences);
  const transitions = useTransition(items, item => item.key, {
    from: { transform: "translate3d(0,-40px,0)" },
    enter: { transform: "translate3d(0,0px,0)" },
    leave: { transform: "translate3d(0,-40px,0)" }
  });
  return (
    <Formik
      initialValues={{ text: "" }}
      validate={values => {
        const errors = {};
        if (!values.text) {
          errors.text = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        const randKeyId = Math.random() * 1000;
        setTimeout(() => {
          add(values.text, randKeyId, ANON_USER);
          setSubmitting(false);
        }, 3);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="feedback-form">
          <div className="grid-x">
            <div className="cell small-12">
              <Field
                className="feedback-text"
                type="text"
                name="text"
                placeHolder="Write your own feedback"
              />
            </div>
            <div className="small-12">
              <ErrorMessage name="text" component="div" />
              <button
                className="creatix-btn secondary inverted"
                type="submit"
                disabled={isSubmitting}
              >
                Submit Idea!
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

SubmitFeedback.propTypes = {
  add: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ add: addFeedback }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SubmitFeedback);
