import React, { useState } from 'react';
import CreatixAPI from 'Utils/api';
import { useFormik } from 'formik';

import MainButton from 'Components/Buttons/MainButton';
import { PermissionSelector } from 'Components/Forms/Permission';
import { NewUser, AccessLevel } from 'Components/User/types';

interface Props {
  companyId: string;
}

const AddUserByEmail: React.FC<Props> = (props) => {
  const { companyId } = props;
  const [error, setError] = useState('');
  const formik = useFormik({
    initialValues: {
      email: '',
      accessLevel: AccessLevel.Read,
    },
    onSubmit: async (values: NewUser) => {
      try {
        await CreatixAPI(`company/${companyId}/adduser`, 'POST', values);
      } catch (e) {
        setError(e.message);
      }
    },
  });
  return (
    <div>
      <h4>Invite user by Email</h4>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid-x">
          <div className="cell small-5">
            <label>
              Email
              <input
                id="email"
                name="email"
                className="input-field input-field__medium"
                type={'text'}
                placeholder={'User Email'}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </label>
          </div>
          <div className="cell small-5">
            <PermissionSelector name="accessLevel" />
          </div>
        </div>
        <div className="cell small-2">
          <MainButton type="submit" id="createUser" size="large" round={true}>
            Create user
          </MainButton>
          {error && <p>{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default AddUserByEmail;
