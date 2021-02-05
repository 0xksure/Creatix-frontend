import React, { useState } from 'react';
import { useFormik } from 'formik';
import creatixAPI from 'Utils/api';
import MainButton from 'Components/Buttons/MainButton';

const CreateCompanyForm: React.FC = () => {
  const [error, setError] = useState('');
  const formik = useFormik({
    initialValues: {
      companyName: '',
    },
    onSubmit: async (values) => {
      try {
        await creatixAPI('company/create', 'POST', values);
      } catch (e) {
        setError(e);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid-x create-company">
        <input
          id="companyName"
          className="input-field input-field--no-margin input-field__medium"
          name="companyName"
          type={'text'}
          placeholder={'Company name'}
          onChange={formik.handleChange}
          value={formik.values.companyName}
        />
        <MainButton type="submit" id="createCompany" size="small" round={true}>
          +
        </MainButton>
        {error && <p>{error}</p>}
      </div>
    </form>
  );
};

export default CreateCompanyForm;
