import React, { ChangeEvent } from 'react';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const CompanySelector: React.FC = () => {
  const companies = useSelector((state) => state.Auth.companies);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      company: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    enableReinitialize: true,
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const companyId = e.target.value;
    history.push(`/${companyId}/feedback`);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <select
        className={'select-box'}
        placeholder="Select company"
        name="company"
        id="company"
        onBlur={handleChange}
        onChange={handleChange}
      >
        <option value="" disabled selected>
          Company
        </option>
        {companies.map((company, idx) => {
          return (
            <option value={company.id} key={idx}>
              {company.companyName}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default CompanySelector;
