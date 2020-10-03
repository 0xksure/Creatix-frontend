import React, { useState, useEffect } from 'react';
import SearchBar from 'Components/Search/SearchBar';
import SingleList from 'Components/List/SingleList';
import SingleListItem from 'Components/List/SingleListItem';
import creatixAPI from 'Utils/api';
import { METHODS } from 'http';

const SearchCompanies: React.FC = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    try {
      const data = creatixAPI('organizations', 'GET');
    } catch (err) {
      setError(err);
    }
  }, [query]);

  console.log(organizations);
  return (
    <>
      <SearchBar query={query} onChange={setQuery} />
      <SingleList>
        {organizations && organizations.length === 0 && (
          <SingleListItem name={`${query} does not seem to exist`} />
        )}
        {organizations &&
          organizations.length > 0 &&
          organizations.map((organization) => {
            return <SingleListItem name={organization} />;
          })}
      </SingleList>
    </>
  );
};

export default SearchCompanies;
