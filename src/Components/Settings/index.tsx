import React from 'react';
import { useSelector } from 'react-redux';
import CompanyList from 'Components/Company/CompanyList';

const Settings: React.FC = () => {
  const auth = useSelector((state) => state.Auth);
  const companies = useSelector((state) => state.Auth.companies);
  return (
    <div className="grid-x padding-left-m">
      <div className="cell small-12 margin-bottom-l">
        <h2 className="h2">{`Good morning ${`${auth.firstname} ${auth.lastname}`}`}</h2>
        <h3 className="h3 blue"> This is where collaboration is born</h3>
      </div>

      <div className="cell small-12 ">
        <div className="grid-x margin-bottom-m">
          <div className="cell small-5">
            <h3 className="h3 pink">Companies</h3>
            {companies.length === 0 && (
              <div className="warning-box">
                <h5 className="h5 ">
                  Ooops! It seems like you don&apost have any companies yet! Create a new company to
                  start analyzing feedback
                </h5>
              </div>
            )}
          </div>
        </div>

        <CompanyList companies={companies} />
      </div>
    </div>
  );
};

export default Settings;
