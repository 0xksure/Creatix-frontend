import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import MainButton from 'Components/Buttons/MainButton';
import EditCompany from 'Components/Company/EditCompany';
import CreateCompanyForm from 'Components/Company/CreateCompany';

import { Company } from 'Components/Company/types';

interface Props {
  companies: Company[];
}

const CompanyList: React.FC<Props> = (props) => {
  const { companies } = props;
  const [toggleNewCompany, setToggleNewCompany] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const transitions = useTransition(companies, (item) => item.companyName, {
    trail: 250,
    from: { opacity: 0 },
    enter: { opacity: 1 },
  });
  return (
    <div>
      {!selectedCompany && (
        <>
          <div className="cell margin-bottom-m">
            <MainButton
              type="submit"
              id="createCompany"
              size="small"
              round={true}
              onClick={() => setToggleNewCompany(!toggleNewCompany)}
            >
              {toggleNewCompany ? 'Exit' : '+ Create new company'}
            </MainButton>
          </div>
          {toggleNewCompany && <CreateCompanyForm />}
          <ul className="grid-x company-list">
            {transitions.map(({ item, props, key }) => {
              return (
                <li className="cell small-12" key={key}>
                  <animated.div style={props} className="company-list__item">
                    <p className="p medium margin-zero">{item.companyName}</p>
                    <MainButton
                      id={key}
                      type="button"
                      round={true}
                      size="small"
                      onClick={() => setSelectedCompany(item)}
                    >
                      Edit
                    </MainButton>
                  </animated.div>
                </li>
              );
            })}
          </ul>
        </>
      )}
      {selectedCompany && (
        <div className="grid-x">
          <div className="cell small-12">
            <EditCompany company={selectedCompany}>
              <MainButton
                id="edit-button-exit"
                size="small"
                type="button"
                round
                buttonType="primary"
                color="pink"
                onClick={() => setSelectedCompany(null)}
              >
                Back
              </MainButton>
            </EditCompany>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyList;
