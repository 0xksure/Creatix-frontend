import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router';
import MainButton from 'Components/Buttons/MainButton';
import { signupUser } from 'Actions/Auth';
import Logo from 'Components/Icons/LogoIcon';
import BasicInput from 'Components/Search/BasicInput';
import * as yup from 'yup';

const SignupSchema = yup.object().shape({
  Firstname: yup.string().required(),
  Lastname: yup.string().required(),
  Email: yup.string().email().required(),
  Password: yup.string().required(),
  Password2: yup.string().required('Password is a required field'),
  CompanyName: yup.string(),
});

const Signup: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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
              CompanyName: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting, setStatus }) => {
              dispatch(signupUser(values))
                .then(() => {
                  setSubmitting(false);
                  history.push('/login');
                  return null;
                })
                .catch(() => {
                  setSubmitting(false);
                  setStatus({ error: 'Not able to sign up' });
                });
            }}
          >
            {({ isSubmitting, status, handleChange }) => {
              return (
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
                      <label className="input-label" htmlFor="CompanyName">
                        Organization to join
                      </label>
                      <BasicInput name={'CompanyName'} onChange={handleChange} />
                      <ErrorMessage name="CompanyName" component="div" />
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
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default Signup;
