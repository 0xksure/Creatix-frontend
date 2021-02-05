import React, { useState } from 'react';
import CreatixAPI from 'Utils/api';
import { useFormik } from 'formik';

import MainButton from 'Components/Buttons/MainButton';
import { PermissionSelector } from 'Components/Forms/Permission';
import { NewUserByUsername, AccessLevel } from 'Components/User/types';

interface Props {
  companyId: string;
}

const AddUserByEmail: React.FC<Props> = (props) => {
  const { companyId } = props;
  const [error, setError] = useState('');
  const formik = useFormik({
    initialValues: {
      username: '',
      accessLevel: AccessLevel.Read,
    },
    onSubmit: async (values: NewUserByUsername) => {
      try {
        await CreatixAPI(`company/${companyId}/adduser`, 'POST', values);
      } catch (e) {
        setError(e.message);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="margin-top-m margin-bottom-m">
      <div className="grid-x add-user-form ">
        <div className="cell small-2">
          <input
            id="username"
            name="username"
            className="input-field  input-field--no-margin"
            type={'text'}
            placeholder={'Username'}
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </div>
        <div className="cell small-4">
          <PermissionSelector name="accessLevel" />
        </div>

        <div className="cell small-4">
          <MainButton type="submit" id="createUser" size="small" round={true}>
            Create user
          </MainButton>
        </div>
        {error && <p>{error}</p>}
      </div>
    </form>
  );
};

export default AddUserByEmail;
