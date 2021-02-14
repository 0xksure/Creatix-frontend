import React, { useState } from 'react';
import { useFormik } from 'formik';
import SearchBar from 'Components/Search/SearchBar';
import creatixAPI from 'Utils/api';
import { FeedbackValues } from './types';

interface Props {
  companyId: string;
  setFilteredFeedbacks: (feedbacks: FeedbackValues[]) => void;
}

const SearchFeedback: React.FC<Props> = (props) => {
  const { companyId, setFilteredFeedbacks } = props;
  const [isSearching, setIsSearching] = useState(false);
  const [searchSuccess, setSearchSuccess] = useState(true);
  const formik = useFormik({
    initialValues: {
      searchTerm: '',
    },
    onSubmit: async (values) => {
      setIsSearching(true);
      try {
        const filteredFeedbacks = await creatixAPI<undefined, FeedbackValues[]>(
          `feedback/${companyId}/search/${values.searchTerm}`,
          'POST',
        );
        setFilteredFeedbacks(filteredFeedbacks);
        setSearchSuccess(true);
      } catch (e) {
        setSearchSuccess(false);
      }
      setIsSearching(false);
    },
  });

  const handleEmpty = () => {
    formik.setFieldValue('searchTerm', '');
  };

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
                  onEmpty={handleEmpty}
                  query={formik.values.searchTerm}
                />
              </div>
              <div className="cell small-12">
                {!isSearching && !searchSuccess && <p>We could not find any feedbacks</p>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchFeedback;
