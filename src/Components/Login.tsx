import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
import MainButton from 'Components/Buttons/MainButton';
import { loginUser } from 'Actions/Auth';
import AlertBox from 'Components/AlertBox';
import Logo from 'Components/Icons/LogoIcon';

const Login: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="horizontal-center margin-top-l">
      <div className="grid-x content-card padding-horizontal-l horizontal-left">
        <div className="cell horizontal-center padding-vertical-m">
          <Logo className="svg-logo icon-m " />
        </div>

        <div className="cell login-form padding-bottom-m">
          <Formik
            initialValues={{
              email: '',
              password: '',
              error: '',
            }}
            validate={() => {
              const errors = {};
              return errors;
            }}
            onSubmit={(values, { setSubmitting, setStatus, setErrors }) => {
              dispatch(loginUser(values.email, values.password))
                .then(() => {
                  setSubmitting(false);
                  <Redirect to="/user" />;
                  return null;
                })
                .catch(() => {
                  setSubmitting(false);
                  setErrors({
                    error:
                      'Hmm, we are not able to log you in. It might be that you username or password is incorrect.',
                  });
                  setStatus({ error: 'Not able to sign up' });
                });
              <Redirect to="/login" />;
            }}
          >
            {({ isSubmitting, errors }) => (
              <Form className="">
                <div className="grid-x grid-margin-x align-center ">
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
                    <Field type="password" className="input-field" name="password" />
                  </div>
                  <div className="cell small-12">
                    <NavLink exact to="/forgot-password">
                      <p className="p link right">Forgot you password?</p>
                    </NavLink>
                  </div>
                  <div className="cell small-12">
                    {errors.error && <AlertBox alertType="error">{errors.error}</AlertBox>}
                  </div>
                  <div className="cell small-12 padding-vertical-s">
                    <MainButton
                      id="submitLogin"
                      buttonType="submit"
                      round="round"
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
          <NavLink exact to="/signup">
            <p className="p margin-zero">or Sign up now!</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Login;
