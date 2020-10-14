import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import MainButton from 'Components/Buttons/MainButton';
import { postFeedback } from 'Actions/Feedback';

interface Props {
  draftNewFeedback?: boolean;
  onExit: () => void;
}

const NewFeedback: React.FC = (props) => {
  const { onExit } = props;
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    onSubmit: (values) => {
      dispatch(postFeedback(values));
    },
  });
  return (
    <div className="cell margin-top-m">
      <div className="grid-x align-center">
        <div className="cell small-8 feedback-item">
          <form onSubmit={formik.handleSubmit}>
            <div className="grid-x">
              <div className="cell small-11">
                <input
                  className="input-field input-field__medium"
                  name="title"
                  type={'text'}
                  placeholder={'Title'}
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
              </div>
              <div className="cell small-1">
                <button onClick={onExit} className="feedback-add-item__exit">
                  X
                </button>
              </div>
              <div className="cell small-12 ">
                <textarea
                  className="input-field input-field__textarea"
                  name="description"
                  rows={2}
                  type={'textarea'}
                  placeholder={'Description'}
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
              </div>
              <div className="cell small-2 center-content">
                <MainButton id="submitLogin" type="submit" round="round" size="small">
                  <p className="p margin-zero">Save</p>
                </MainButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewFeedback;
