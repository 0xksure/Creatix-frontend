import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  return (
    <footer className="grid-container full footer ">
      <div className="grid-x footer-content">
        <div className="cell small-12 medium-6 large-6">
          <h3 className="h3 pink"> Creatix </h3>
          <p className="p"> Oslo </p>
        </div>
        <div className="cell small-12 medium-2 large-2">
          <nav className="footer-nav">
            <ul className="footer-list">
              <li>
                <p className="p bold-font pink"> Products</p>
              </li>
              <li>
                <Link smooth to={{ pathname: "/discover", hash: "#feedback" }}>
                  <p className="p blue">Feedback</p>
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  to={{ pathname: "/discover", hash: "#transparency" }}
                >
                  <p className="p blue">Transparency</p>
                </Link>
              </li>
              <li>
                <Link smooth to={{ pathname: "/discover", hash: "#teamcards" }}>
                  <p className="p blue">Team Cards</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="cell small-12 medium-2 large-2">
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
