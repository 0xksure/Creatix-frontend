import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="grid-container footer">
      <div className="grid-x footer-content">
        <div className="cell small-4 shrink">
          <h3 className="h3 pink center"> Creatix </h3>
        </div>

        <div className="cell auto ">
          <p className="p"> Contact us </p>
        </div>
        <div className="cell auto ">
          <p className="p"> Discover </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
