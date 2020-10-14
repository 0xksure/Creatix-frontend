import React from 'react';
import { useFormik } from 'formik';
import SearchBar from 'Components/Search/SearchBar';

const SearchFeedback: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      searchTerm: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="cell">
      <div className="grid-x align-center">
        <div className="cell small-6">
          <form onSubmit={formik.handleSubmit}>
            <div className="grid-x">
              <div className="cell small-12">
                <SearchBar
                  name="searchTerm"
                  placeholder={'Search'}
                  onChange={formik.handleChange}
                  query={formik.values.searchTerm}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchFeedback;
