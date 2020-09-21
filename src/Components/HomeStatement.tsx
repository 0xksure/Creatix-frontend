import React from "react";

const STATEMENT = "Business Transparency Made Simple";
const SUB_STATEMENT =
  "Creatix is about transparency. Transparency in what people want, how people work and how people evolve. It is about having the opportunity to be heard and ultimately improving the business together.";

function HomeStatement() {
  return (
    <div className="grid-x">
      <div className="cell small-12 home-statement">
        <div className="text-content">
          <h1 className="h1 large" id="home_statement_main">
            {STATEMENT}
          </h1>
          <p className="p large" id="home_sub_statement_main">
            {SUB_STATEMENT}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeStatement;
