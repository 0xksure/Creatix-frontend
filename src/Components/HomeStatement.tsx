import React from 'react';

const TEXT = {
  STATEMENT: 'Aggregated Feedback',
  SUB_STATEMENT: (
    <>
      Creatix lets you collect, submit and aggregate feedback in order for you to make the best
      decisions possible. By creating new feedback on the fly you can focus on the next task and
      analyse the data <span className="p--pink">when</span> you want. You can subscribe to feedback
      channels of your choice. With the help of text recognizion we are able to tag your feedback
      into useful categories and find out which feedbacks are most similar. Thus helping you figure
      out which feedback need the most attention.
    </>
  ),
};

const HomeStatement: React.FC = () => {
  return (
    <div className="grid-x">
      <div className="cell small-12 home-statement">
        <div className="text-content">
          <h1 className="h1 large" id="home_statement_main">
            {TEXT.STATEMENT}
          </h1>
          <p className="p large" id="home_sub_statement_main">
            {TEXT.SUB_STATEMENT}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeStatement;
