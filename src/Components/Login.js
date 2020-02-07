import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Redirect } from "react-router";
import { MainButton } from "./Buttons";
import { loginUser } from "../Actions/Auth";
import { NavLink } from "react-router-dom";
import { AlertBox } from "./Alerts"
import Logo from "./Icons/Logo"

function Login(props) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.Auth);

  return (
    <div className="horizontal-center margin-top-l">
      <div className="grid-x content-card padding-horizontal-l horizontal-left">
        <div className="cell horizontal-center padding-vertical-m">
          <Logo className="svg-logo icon-m " />
        </div>

        <div className="cell login-form padding-bottom-m">
          <Formik
            initialValues={{
              email: "",
              password: "",
              error: "",
            }}
            validate={values => {
              const errors = {};
              return errors;
            }}
            onSubmit={(values, { setSubmitting, setStatus, setErrors }) => {
              dispatch(loginUser(values.email, values.password))
                .then(res => {
                  setSubmitting(false);
                  props.history.push(`/${res.ID}/user-home`);
                })
                .catch(err => {
                  console.log("Catch!!! ");
                  setSubmitting(false);
                  setErrors({ error: "Hmm, we are not able to log you in. It might be that you username or password is incorrect." })
                  setStatus({ error: "Not able to sign up" });
                });
              <Redirect to="/login" />;
            }}
          >
            {({ values, isSubmitting, setFieldValue, errors }) => (
              <Form className="">
                <div className="grid-x grid-margin-x align-center ">
                  <div className="cell small-12">
                    <label className="input-label" htmlFor="email">Email</label>
                    <Field type="email" className="input-field" name="email" />
                    <ErrorMessage name="email" component="div" />
                  </div>
                  <div className="cell small-12">
                    <label className="input-label" htmlFor="password">Password</label>
                    <Field type="password" className="input-field" name="password" />

                  </div>
                  <div className="cell small-12">
                    <NavLink
                      exact
                      to="/forgot-password"
                    >
                      <p className="p link right">
                        Forgot you password?
                  </p>
                    </NavLink>
                  </div>
                  <div className="cell small-12">
                    {
                      errors.error &&
                      <AlertBox alertType="error">{errors.error}</AlertBox>
                    }
                  </div>
                  <div className="cell small-12 padding-vertical-s">
                    <MainButton
                      id="submitLogin"
                      buttonType="submit"
                      round={'round'}
                      size=""
                      disabled={isSubmitting}
                    >
                      <p className="p margin-zero">Login</p>
                    </MainButton>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="cell small-12 padding-vertical-s">

          <NavLink
            exact
            to="/signup"
          >
            <p className="p margin-zero">or Sign up now!</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Login;
