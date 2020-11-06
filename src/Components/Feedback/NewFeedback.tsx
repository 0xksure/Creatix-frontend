import React, { useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import MainButton from 'Components/Buttons/MainButton';
import { PostFeedback } from 'Components/Feedback/types';

interface Props {
  draftNewFeedback?: boolean;
  onExit: () => void;
  onSubmit: (feedback: string) => void;
  id: string;
}

const NewFeedback: React.FC<Props> = (props) => {
  const { onExit, id, onSubmit } = props;
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref && ref.current && ref.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    onSubmit: (values: PostFeedback) => {
      console.log(values);
      onSubmit(values);
      onExit();
    },
  });
  return (
    <div id={id} className="cell margin-top-m">
      <div className="grid-x align-center">
        <div className="cell small-10 medium-10 large-6 feedback-item">
          <form onSubmit={formik.handleSubmit}>
            <div className="grid-x">
              <div className="cell small-11">
                <input
                  id="new-feedback-item"
                  ref={ref}
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
                  placeholder={'Description'}
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
              </div>
              <div className="cell small-2 center-content">
                <MainButton
                  id="submitLogin"
                  type="submit"
                  round="round"
                  size="small"
                  onClick={() => null}
                >
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
