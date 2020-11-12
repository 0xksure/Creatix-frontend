import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import FormBox from 'Components/Box/FormBox';
import IdeaIcon from 'Components/Icons/IdeaIcon';

import MainButton from 'Components/Buttons/MainButton';
import HeaderButton from 'Components/Buttons/HeaderButton';
const ContactModal: React.FC = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      content: '',
    },
    onSubmit: async (values) => {
      await fetch(`${process.env.API_URL}auth/contact-us`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(values),
      });
      setSubmitSuccess(true);
    },
  });

  return (
    <FormBox Logo={IdeaIcon}>
      {!submitSuccess ? (
        <form onSubmit={formik.handleSubmit}>
          <div className="grid-x grid-margin-x">
            <div className="cell small-12">
              <h1 className="h1"> Contact us</h1>
              <p className="p">
                Thank you for wanting to stay in touch. We are not far from releasing a{' '}
                <span className="p--pink">beta version</span> of creatix. If you want to be notified
                or if you have some feedback for us please let us know down below. Thank you!
              </p>
            </div>
            <div className="cell small-12">
              <label className="input-label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="input-field"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div className="cell small-12">
              <div className="grid-x">
                <div className="cell small-11">
                  <label className="input-label" htmlFor="content">
                    Content
                  </label>
                  <textarea
                    id="content"
                    className="input-field input-field__textarea"
                    name="content"
                    rows={3}
                    onChange={formik.handleChange}
                    value={formik.values.content}
                  />
                </div>
                <MainButton id="submitLogin" type="submit" round="round" size="medium">
                  <p className="p margin-zero">Submit</p>
                </MainButton>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div className="grid-x grid-margin-x">
          <div className="cell small-12">
            <h2 className="h2">
              Thank you for showing interest in <span className="p--pink">Creatix</span>
            </h2>
            <p className="p">We will contact you as soon as possible</p>
          </div>
          <div className="cell small-12">
            <HeaderButton>
              <NavLink activeClassName="nav-link_active" className="nav-link" exact to="/">
                <h4 className="h4 medium-font small margin-zero" id="header_main_nav_link">
                  Back to home
                </h4>
              </NavLink>
            </HeaderButton>
          </div>
        </div>
      )}
    </FormBox>
  );
};

export default ContactModal;
