import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer amber darken-1" style={{ marginTop: 100 }}>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">CodeBuddy</h5>
            <p className="grey-text text-lighten-4">
              Created by Wesley Burch, Ishmael Carter, and Gavin Andrews
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Wesley
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Ishmael
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Gavin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2014 Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
