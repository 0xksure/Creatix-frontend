import React from "react";

const STATEMENT = "Business Transparency made Simple";
const SUB_STATEMENT =
  "Creatix is all about creating your new idea by focusing on what you know best. It also offers the opportunity to share your ideas. In this way you can easily discover the market, investor interest and potential cofounders.";

function HomeStatement() {
  return (
    <div className="grid-x">
      <div className="cell small-12 home-statement">
        <div className="text-content">
          <h1 className="h1 h1__bold">{STATEMENT}</h1>
          <p className="p">{SUB_STATEMENT}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeStatement;
