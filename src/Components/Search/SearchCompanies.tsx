import React, { useState, useEffect } from 'react';
import SearchBar from 'Components/Search/SearchBar';
import SingleList from 'Components/List/SingleList';
import SingleListItem from 'Components/List/SingleListItem';
import SelectedBox from 'Components/Box/SelectedBox';
import creatixAPI from 'Utils/api';
import { METHODS } from 'http';

interface Props {
  onSelectCompany: (org: string) => void;
}

const SearchCompanies: React.FC<Props> = (props) => {
  const { onSelectCompany } = props;
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrg, setSelectedOrg] = useState('');

  useEffect(() => {
    try {
      const data = creatixAPI(`company/search/${query}`, 'GET');
      setOrganizations(data);
    } catch (err) {
      setError(err);
    }
  }, [query]);

  console.log(selectedOrg);
  return (
    <>
      {selectedOrg.length > 0 && (
        <SelectedBox name={selectedOrg} onClick={() => setSelectedOrg('')} />
      )}
      {selectedOrg.length === 0 && (
        <>
          <SearchBar query={query} onChange={setQuery} />
          <SingleList>
            {organizations && organizations.length === 0 && (
              <SingleListItem name={`${query} does not seem to exist`} />
            )}
            {organizations &&
              organizations.length > 0 &&
              organizations.map((organization) => {
                return (
                  <SingleListItem
                    name={organization}
                    onClick={(e) => {
                      console.log('event: ', e.target);
                      setSelectedOrg(e.target.id);
                      onSelectCompany(e.target.id);
                    }}
                  />
                );
              })}
          </SingleList>
        </>
      )}
    </>
  );
};

export default SearchCompanies;
