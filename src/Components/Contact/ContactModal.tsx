import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import Modal from 'Components/Modals';
import MainButton from 'Components/Buttons/MainButton';
const ContactModal: React.FC = () => {
  const history = useHistory();
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      content: '',
    },
    onSubmit: async (values, {}) => {
      console.log('submit');
      const resp = await fetch(`${process.env.API_URL}auth/contact-us`, {
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
    <Modal isOpen={true} className="contact-us-modal">
      {!submitSuccess ? (
        <form onSubmit={formik.handleSubmit}>
          <div className="grid-x grid-margin-x">
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
        <div>Congratulations</div>
      )}
    </Modal>
  );
};

export default ContactModal;
