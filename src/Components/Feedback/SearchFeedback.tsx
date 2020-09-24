import React from "react";
import { useFormik, Form, Field } from "formik";

const SearchFeedback: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      searchTerm: "",
    },
    onSubmit: (values) => {},
  });
  return (
    <div className="cell">
      <div className="grid-x align-center">
        <div className="cell small-6">
          <Form onSubmit={formik.handleSubmit}>
            <div className="grid-x">
              <div className="cell small-12">
                <label htmlFor="searchTerm">Search feedback</label>
                <Field
                  type="text"
                  name="searchTerm"
                  className="searchbar"
                  onChange={formik.handleChange}
                  value={formik.values.searchTerm}
                />
                <button type="submit">Search</button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SearchFeedback;
