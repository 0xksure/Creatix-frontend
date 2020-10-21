import React from 'react';
import { useSelector } from 'react-redux';

const UserHome: React.FC = () => {
  const auth = useSelector((state) => state.Auth);

  return (
    <div className="grid-x">
      <div className="cell-12">
        <h2>{`Good morning ${`${auth.firstname} ${auth.lastname}`}`}</h2>
      </div>
      <div className="cell small-12"></div>
    </div>
  );
};

export default UserHome;
