import React, { useState } from 'react';
import { useFormik, FormikProps } from 'formik';
import CreatixAPI from 'Utils/api';

import { AccessLevel } from 'Components/User/types';
interface Props {
  label?: string;
  userId: string;
  companyId: string;
  className?: string;
  initialPermission: AccessLevel;
}

interface PermissionSelectProps {
  accessLevel: string;
}

export const PermissionSelector: React.FC<FormikProps<PermissionSelectProps>> = (props) => {
  const { name, values } = props;
  return (
    <select
      id={name}
      name={name}
      value={values[name]}
      className={'permission__select permission__select--text permission__select--no-margin'}
    >
      <option value="" disabled selected>
        Select permission
      </option>
      <option className={'permission__option'} value={AccessLevel.Admin}>
        Admin
      </option>
      <option className={'permission__option'} value={AccessLevel.Write}>
        Write
      </option>
      <option className={'permission__option'} value={AccessLevel.Read}>
        Read
      </option>
    </select>
  );
};

const PermissionForm: React.FC<Props> = (props) => {
  const { className, label, userId, companyId, initialPermission } = props;
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      accessLevel: initialPermission,
    },
    onSubmit: async (values) => {
      try {
        const resp = await CreatixAPI(`company/${companyId}/permission`, 'POST', {
          userId: userId.toString(),
          accessLevel: values.accessLevel,
        });
      } catch (e) {
        setError(e);
      }
    },
  });
  return (
    <form onChange={formik.handleSubmit} className={`permission ${className}`}>
      {label && <label>{label}</label>}
      <PermissionSelector name="accessLevel" values={formik.values} />
      {error && <div>{error}</div>}
    </form>
  );
};

export default PermissionForm;
