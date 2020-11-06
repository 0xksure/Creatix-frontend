import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { commentFeedback, getFeedback } from 'Actions/Feedback';
import MainButton from 'Components/Buttons/MainButton';

interface Prop {
  feedbackId: string;
  onSubmit: (data: any) => void;
}

const NewComment: React.FC<Prop> = (props) => {
  const { feedbackId, onSubmit } = props;
  const formik = useFormik({
    initialValues: {
      comment: '',
    },
    onSubmit: async (values, { resetForm }) => {
      await onSubmit({ action: 3, comment: { comment: values.comment, feedbackId: feedbackId } });
      resetForm();
    },
  });

  useEffect(() => {
    const eventListener = (event) => {
      console.log(event);
    };
    document.addEventListener('keypress', eventListener);
    return () => {
      document.removeEventListener('keypress', eventListener);
    };
  });

  const submitOnEnter = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    console.log('event. ', event);
    if (event.key === 'Enter') {
      formik.submitForm();
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <textarea
        className="input-field input-field__textarea input-field__textarea--dark-blue"
        placeholder="Comment feedback"
        rows={4}
        name="comment"
        id="firstName"
        onKeyPress={submitOnEnter}
        onChange={formik.handleChange}
        value={formik.values.comment}
      />
      <MainButton id="" size={'small'} type="submit" onClick={() => null}>
        Submit
      </MainButton>
    </form>
  );
};

export default NewComment;
