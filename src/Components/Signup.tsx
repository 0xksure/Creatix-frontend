import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Redirect } from "react-router";
import DatePicker from "react-datepicker";
import MainButton from "Components/Buttons/MainButton";
import { signupUser } from "Actions/Auth";
import Logo from "./Icons/LogoIcon";

function Signup(props) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.Auth);

  return (
    <div className="horizontal-center margin-top-l">
      <div className="grid-x content-card padding-horizontal-l horizontal-left">
        <div className="cell small-12 ">
          <div className="cell horizontal-center padding-vertical-m">
            <Logo className="svg-logo icon-m " />
          </div>
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              birthday: new Date(),
              email: "",
              password: "",
              retry_password: "",
            }}
            validate={(values) => {
              const errors = {};
              if (values.password != values.retry_password) {
                errors.retry_password = "Passwords are not equal";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting, setStatus }) => {
              dispatch(signupUser(values))
                .then((res) => {
                  setSubmitting(false);
                  props.history.push("/login");
                })
                .catch((err) => {
                  setSubmitting(false);
                  setStatus({ error: "Not able to sign up" });
                });
              <Redirect to="/login" />;
            }}
          >
            {({ values, isSubmitting, setFieldValue, status }) => (
              <Form>
                <div className="grid-x grid-margin-x">
                  <div className="cell small-12">
                    <label className="input-label" htmlFor="firstname">
                      Name
                    </label>
                    <Field
                      type="text"
                      className="input-field"
                      name="firstname"
                    />
                    <ErrorMessage name="firstname" component="div" />
                  </div>
                  <div className="cell small-12">
                    <label className="input-label" htmlFor="lastname">
                      Lastname
                    </label>
                    <Field
                      type="text"
                      className="input-field"
                      name="lastname"
                    />
                    <ErrorMessage name="lastname" component="div" />
                  </div>
                  <div className="cell small-12">
                    <label className="input-label" htmlFor="birthday">
                      Birthday
                    </label>
                    <DatePicker
                      name="birthday"
                      className="input-field"
                      value={values.birthday}
                      selected={values.birthday}
                      dropdownMode="select"
                      onChange={(date) => setFieldValue("birthday", date)}
                    />
                  </div>
                  <div className="cell small-12">
                    <label className="input-label" htmlFor="email">
                      Email
                    </label>
                    <Field type="email" className="input-field" name="email" />
                    <ErrorMessage name="email" component="div" />
                  </div>
                  <div className="cell small-12">
                    <label className="input-label" htmlFor="password">
                      Password
                    </label>
                    <Field
                      type="password"
                      className="input-field"
                      name="password"
                    />
                    <ErrorMessage name="password" component="div" />
                  </div>
                  <div className="cell small-12">
                    <label className="input-label" htmlFor="retry_password">
                      Rewrite password
                    </label>
                    <Field
                      type="password"
                      className="input-field"
                      name="retry_password"
                    />
                    <ErrorMessage name="retry_password" component="div" />
                  </div>
                  <div className="cell small-12 padding-vertical-s">
                    <MainButton
                      id="submitLogin"
                      buttonType="submit"
                      round="round"
                      size=""
                      disabled={isSubmitting}
                    >
                      <p className="p margin-zero">Sign up</p>
                    </MainButton>
                  </div>
                  {status && status.error}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
export default Signup;
