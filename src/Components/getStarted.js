import React from 'react';
import FormCard from './forms/formCard';

class GetStarted extends React.Component {
  render() {
    return (
      <div className="grid-container-full main-container">
        <div className="grid-x">
          <div className="cell">
            <h1 className="h1">Creatix is still in prototype mode</h1>
            <p className="p">
              But fear not we are currently working on prototype
            </p>
          </div>
          <div className="cell">
            <h1 className="h1">
              But if you want you can sign up to become an beta user
            </h1>
          </div>
          <div className="cell small-4 medium-4 large-4 formcard">
            <FormCard content={'ok'} />
          </div>
        </div>
      </div>
    );
  }
}

export default GetStarted;
