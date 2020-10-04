import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Redirect } from 'react-router';
import MainButton from 'Components/Buttons/MainButton';
import { signupUser } from 'Actions/Auth';
import Logo from 'Components/Icons/LogoIcon';
import SearchCompanies from 'Components/Search/SearchCompanies';
import * as yup from 'yup';

const SignupSchema = yup.object().shape({
  Firstname: yup.string().required(),
  Lastname: yup.string().required(),
  Email: yup.string().email().required(),
  Password: yup.string().required(),
  Password2: yup.string().required(),
  OrganizationId: yup.string(),
});

const Signup: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="horizontal-center margin-top-l">
      <div className="grid-x content-card padding-horizontal-l horizontal-left">
        <div className="cell small-12 ">
          <div className="cell horizontal-center padding-vertical-m">
            <Logo className="svg-logo icon-m " />
          </div>
          <Formik
            initialValues={{
              Firstname: '',
              Lastname: '',
              Email: '',
              Password: '',
              Password2: '',
              OrganizationId: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting, setStatus }) => {
              dispatch(signupUser(values))
                .then(() => {
                  setSubmitting(false);
                  <Redirect to="/login" />;
                  return null;
                })
                .catch(() => {
                  setSubmitting(false);
                  setStatus({ error: 'Not able to sign up' });
                });
              <Redirect to="/login" />;
            }}
          >
            {({ isSubmitting, setFieldValue, status, errors }) => (
              <Form>
                <div className="grid-x grid-margin-x">
                  <div className="cell small-12">
                    <label className="input-label" htmlFor="Firstname">
                      Firstname
                    </label>
                    <Field type="text" className="input-field" name="Firstname" />
                    <ErrorMessage className="error-message" name="Firstname" component="div" />
                  </div>
                  <div className="cell small-12">
                    <label className="input-label" htmlFor="Lastname">
                      Lastname
                    </label>
                    <Field type="text" className="input-field" name="Lastname" />
                    <ErrorMessage className="error-message" name="Lastname" component="div" />
                  </div>
                  <div className="cell small-12">
                    <label className="input-label" htmlFor="Email">
                      Email
                    </label>
                    <Field type="email" className="input-field" name="Email" />
                    <ErrorMessage className="error-message" name="Email" component="div" />
                  </div>
                  <div className="cell small-12">
                    <label className="input-label" htmlFor="Password">
                      Password
                    </label>
                    <Field type="password" className="input-field" name="Password" />
                    <ErrorMessage className="error-message" name="Password" component="div" />
                  </div>
                  <div className="cell small-12">
                    <label className="input-label" htmlFor="Password2">
                      Rewrite password
                    </label>
                    <Field type="password" className="input-field" name="Password2" />
                    <ErrorMessage className="error-message" name="Password2" component="div" />
                  </div>

                  <div className="cell small-12">
                    <label className="input-label" htmlFor="organizationId">
                      Select organization to join
                    </label>
                    <SearchCompanies
                      onSelectCompany={(org) => setFieldValue('organizationId', org)}
                    />
                    <p>No organization? Create one after you have logged in! </p>
                    <ErrorMessage name="organizationId" component="div" />
                  </div>
                  <div className="cell small-12 padding-vertical-s">
                    <MainButton
                      id="submitLogin"
                      type="submit"
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
};
export default Signup;
