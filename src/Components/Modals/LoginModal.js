import React, { useLayoutEffect } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

import AlertBox from "../Alerts";

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
    >
      {({ isSubmitting, status }) => (
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          {status && status.msg && (
            <AlertBox alertType="error">{status.msg}</AlertBox>
          )}
        </Form>
      )}
    </Formik>
  );
}

function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, []); // Empty array ensures effect is only run on mount and unmount
}

function LoginModal() {
  useLockBodyScroll();
  return (
    <div className="grid-container login-modal">
      <div className="grid-x">
        <div className="cell small-12 medium-6 large-4 small-offset-0 medium-offset-4 large-offset-8 login-box">
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
