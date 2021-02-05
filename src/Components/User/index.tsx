import React from 'react';
import { useSelector } from 'react-redux';

const UserHome: React.FC = () => {
  const auth = useSelector((state) => state.Auth);
  const notifications = useSelector((state) => state.Auth.notifications);

  return (
    <div className="grid-x padding-left-m">
      <div className="cell small-12 margin-bottom-l">
        <h2 className="h2">{`Good morning ${`${auth.firstname} ${auth.lastname}`}`}</h2>
        <h3 className="h3 blue">Hope you are ready to sort through your feedbacks</h3>
      </div>
      <div className="cell small-12 margin-bottom-m ">
        <h3 className="h3 pink">Notifications: </h3>
        {!notifications && (
          <div className="warning-box">
            <h5 className="h5 ">
              Seems like there are no new notifications. Why not note down some feedback?
            </h5>
          </div>
        )}
      </div>
      <div className="cell small-12"></div>
    </div>
  );
};

export default UserHome;
