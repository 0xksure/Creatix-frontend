import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Redirect } from "react-router";
import { MainButton } from "../Buttons";
import DatePicker from "react-datepicker";
import { signupUser } from "../../Actions/Auth";

function Signup(props) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.Auth);

  return (
    <div className="grid-x ">
      <div className="cell small-6 small-offset-2 ">
        <h2>Signup</h2>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            birthday: new Date(),
            email: "",
            password: "",
            retry_password: ""
          }}
          validate={values => {
            const errors = {};
            if (values.password != values.retry_password) {
              errors.retry_password = "Passwords are not equal";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, setStatus }) => {
            dispatch(signupUser(values))
              .then(res => {
                console.log("Completed!!!");
                setSubmitting(false);
                props.history.push("/login");
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
                <div className="cell small-6">
                  <label htmlFor="firstname">Name</label>
                  <Field type="text" name="firstname" />
                  <ErrorMessage name="firstname" component="div" />
                </div>
                <div className="cell small-6">
                  <label htmlfor="lastname">Lastname</label>
                  <Field type="text" name="lastname" />
                  <ErrorMessage name="lastname" component="div" />
                </div>
                <div className="cell small-12">
                  <label htmlfor="birthday">Birthday</label>
                  <DatePicker
                    name="birthday"
                    value={values.birthday}
                    selected={values.birthday}
                    dropdownMode="select"
                    onChange={date => setFieldValue("birthday", date)}
                  />
                </div>
                <div className="cell small-12">
                  <label htmlfor="email">Email</label>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div className="cell small-6">
                  <label htmlfor="password">Password</label>
                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                </div>
                <div className="cell small-6">
                  <label htmlFor="retry_password">Rewrite password</label>
                  <Field type="password" name="retry_password" />
                  <ErrorMessage name="retry_password" component="div" />
                </div>
                <MainButton
                  id="submitSignup"
                  buttonType="submit"
                  size="small"
                  disabled={isSubmitting}
                >
                  Sign up
                </MainButton>
                {status && status.error}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default Signup;
