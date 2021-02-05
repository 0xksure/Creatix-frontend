import React, { useEffect, useState } from 'react';
import { Company } from 'Components/Company/types';
import AddUserByUsername from 'Components/User/AddUserByUsername';
import BlockList from 'Components/List/BlockList';
import BlockListItem from 'Components/List/BlockListItem';
import PermissionForm from 'Components/Forms/Permission';
import creatixAPI from 'Utils/api';
import CircleButton from 'Components/Buttons/CircleButton';
import MainButton from 'Components/Buttons/MainButton';

import { User } from 'Components/User/types';
interface Props {
  company: Company;
}

const EditCompany: React.FC<Props> = (props) => {
  const { company, children } = props;
  const [toggleAddUser, setToggleAddUser] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await creatixAPI<null, User[]>(`company/${company.id}/users`, 'GET');
        setUsers(users);
      } catch (e) {
        setError(e.message);
      }
    };

    fetchData();
  }, []);

  const unassignUserFromCompany = async (user: User) => {
    try {
      await creatixAPI(`company/${company.id}/user/${user.id}`, 'DELETE');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="grid-x">
      <div className="cell small-12 margin-bottom-m">
        <div className="grid-x">
          <div className="cell small-6 ">
            <h4 className="h4">
              Edit <span className="p--pink">{company.companyName}</span>
            </h4>
          </div>
          <div className="cell small-6">{children}</div>
        </div>
      </div>

      <div className="cell small-12">
        <h4 className="h4">Users</h4>
        <div className="cell small-4 margin-bottom-m">
          <MainButton
            type="submit"
            id="createUser"
            size="small"
            round={true}
            onClick={() => setToggleAddUser(!toggleAddUser)}
          >
            Add new user
          </MainButton>
        </div>
        {toggleAddUser && <AddUserByUsername companyId={company.id} />}

        <BlockList>
          {users &&
            users.map((user, idx) => (
              <BlockListItem title={`${user.username}`} key={idx}>
                <PermissionForm
                  className={'permission--no-margin permission--centered'}
                  userId={user.id}
                  companyId={company.id}
                />
                <CircleButton
                  onClick={() => unassignUserFromCompany(user)}
                  className="permission--no-margin permission--centered"
                >
                  X
                </CircleButton>
              </BlockListItem>
            ))}
        </BlockList>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default EditCompany;
