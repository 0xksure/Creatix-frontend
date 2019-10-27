import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  return (
    <footer className="grid-container footer">
      <div className="grid-x footer-content">
        <div className="cell small-12 medium-6 large-6">
          <h3 className="h3 pink center"> tenXamp </h3>
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
                  <p className="p blue" id="footer_ampfeedback_nav_link">
                    ampFeedback
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  to={{ pathname: "/discover", hash: "#transparency" }}
                >
                  <p className="p blue" id="footer_ampoverview_nav_link">
                    ampOverview
                  </p>
                </Link>
              </li>
              <li>
                <Link smooth to={{ pathname: "/discover", hash: "#teamcards" }}>
                  <p className="p blue" id="footer_ampemployees_nav_link">
                    ampEmployees
                  </p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="cell small-6 medium-2 large-2">
          <nav className="footer-nav">
            <ul className="footer-list">
              <li>
                <p className="p bold-font pink"> tenXamp</p>
              </li>
              <li>
                <Link smooth to={{ pathname: "/discover", hash: "#feedback" }}>
                  <p className="p blue" id="footer_about_nav_link">
                    About
                  </p>
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
