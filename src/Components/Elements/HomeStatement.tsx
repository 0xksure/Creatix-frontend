import React from 'react';

interface Props {
  statement: string;
  subStatement: string | React.ReactNode;
}

const HomeStatement: React.FC<Props> = ({ statement, subStatement }) => {
  return (
    <div className="grid-x">
      <div className="cell small-12 home-statement">
        <div className="text-content">
          <h1 className="h1 large" id="home_statement_main">
            {statement}
          </h1>
          <p className="p large" id="home_sub_statement_main">
            {subStatement}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeStatement;
