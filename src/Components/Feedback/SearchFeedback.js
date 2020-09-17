function SearchFeedbacks() {
  return (
    <div className="cell">
      <div className="grid-x align-center">
        <div className="cell small-6">
          <h4>Search</h4>
          <Formik
            initialValues={{
              searchTerm: ""
            }}
          >
            {({}) => (
              <Form>
                <div className="grid-x">
                  <div className="cell small-12">
                    <Field
                      type="text"
                      name="searchTerm"
                      className="searchbar"
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
