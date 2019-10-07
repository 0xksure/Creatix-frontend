import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addFeedback } from "../../Actions/FeedbackDemo";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ANON_USER = "Anon";
function IdeaForm(props) {
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
          props.addFeedback(values.text, randKeyId, ANON_USER);
          setSubmitting(false);
        }, 3);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="feedback-form">
          <div className="grid-x">
            <div className="cell small-12">
              <Field className="feedback-text" type="text" name="text" />
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

function SubmitFeedback(props) {
  return <IdeaForm addFeedback={props.addFeedback} />;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addFeedback }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SubmitFeedback);
