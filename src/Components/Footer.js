import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  return (
    <footer className="grid-container footer">
      <div className="grid-x footer-content">
        <div className="cell small-12 medium-6 large-6">
          <h3 className="h3 pink center"> Creatix </h3>
          <p className="p center"> Oslo </p>
        </div>
        <div className="cell small-6 medium-2 large-2">
          <nav className="footer-nav">
            <ul className="footer-list">
              <li>
                <p className="p bold-font pink"> Products</p>
              </li>
              <li>
                <Link smooth to={{ pathname: "/discover", hash: "#feedback" }}>
                  <p className="p blue">ampFeedback</p>
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  to={{ pathname: "/discover", hash: "#transparency" }}
                >
                  <p className="p blue">ampOverview</p>
                </Link>
              </li>
              <li>
                <Link smooth to={{ pathname: "/discover", hash: "#teamcards" }}>
                  <p className="p blue">ampEmployees</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="cell small-6 medium-2 large-2">
          <nav className="footer-nav">
            <ul className="footer-list">
              <li>
                <p className="p bold-font pink"> Creatix</p>
              </li>
              <li>
                <Link smooth to={{ pathname: "/discover", hash: "#feedback" }}>
                  <p className="p blue">About</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
