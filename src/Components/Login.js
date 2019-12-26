import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Redirect } from "react-router";
import { MainButton } from "./Buttons";
import DatePicker from "react-datepicker";
import { loginUser } from "../Actions/Auth";
import { NavLink } from "react-router-dom";

function Login(props) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.Auth);

  return (
    <div className="grid-x ">
      <div className="cell small-6 small-offset-2 ">
        <h2>Login to Creatix</h2>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validate={values => {
            const errors = {};
            return errors;
          }}
          onSubmit={(values, { setSubmitting, setStatus }) => {
            dispatch(loginUser(values.email, values.password))
              .then(res => {
                setSubmitting(false);
                props.history.push(`/${res.ID}/user-home`);
              })
              .catch(err => {
                console.log("Catch!!! ");
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
                  <label htmlfor="email">Email</label>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div className="cell small-12">
                  <label htmlfor="password">Password</label>
                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                </div>
                <div className="cell small-6">
                  <MainButton
                    id="submitLogin"
                    buttonType="submit"
                    size="small"
                    disabled={isSubmitting}
                  >
                    Login
                  </MainButton>
                </div>
                <div className="cell small-6">
                  <MainButton>
                    <NavLink exact to="/signup">
                      Signup
                    </NavLink>
                  </MainButton>
                </div>
                {status && status.error}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default Login;
