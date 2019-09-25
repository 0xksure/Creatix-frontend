import React, { useState } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";

import { Formik, Form, Field, ErrorMessage } from "formik";

function EmailForm() {
  return (
    <Formik
      initialValues={{ email: "" }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

function LoginModal() {
  return (
    <div className="grid-container login-modal">
      <div className="grid-x">
        <div className="cell small-4 small-offset-8 login-box">
          <p className="p bold pink">Hi! Thank you for showing interest! </p>
          <p className="p">
            We are currently not live yet, but out developers are working hard.
            If you want us to contact you when everything is ready, please
            submit your email below.
          </p>
          <EmailForm />
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
