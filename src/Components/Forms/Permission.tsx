import React, { useState } from 'react';
import { useFormik } from 'formik';
import CreatixAPI from 'Utils/api';

interface Props {
  label?: string;
  userId: string;
  companyId: string;
  className?: string;
}

interface PermissionSelectProps {
  name: string;
}

export const PermissionSelector: React.FC<PermissionSelectProps> = (props) => {
  const { name } = props;
  return (
    <select
      id={name}
      name={name}
      className={'permission__select permission__select--text permission__select--no-margin'}
    >
      <option value="" disabled selected>
        Select permission
      </option>
      <option className={'permission__option'} value="admin">
        Admin
      </option>
      <option className={'permission__option'} value="write">
        Write
      </option>
      <option className={'permission__option'} value="read">
        Read
      </option>
    </select>
  );
};

const PermissionForm: React.FC<Props> = (props) => {
  const { className, label, userId, companyId } = props;
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      accessLevel: '',
    },
    onSubmit: async (values) => {
      try {
        await CreatixAPI(`/company/${companyId}/permission`, 'POST', {
          userId: userId,
          accessLevel: values.accessLevel,
        });
      } catch (e) {
        setError(e.message);
      }
    },
  });
  return (
    <form onChange={formik.handleSubmit} className={`permission ${className}`}>
      {label && <label>{label}</label>}
      <PermissionSelector name="accessLevel" />
      {error && <div>{error}</div>}
    </form>
  );
};

export default PermissionForm;
