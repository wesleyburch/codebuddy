import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <div>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
            <li>
              <a>Welcome, {this.props.auth.googleUserFirst}!</a>
            </li>
          </div>
        ];
    }
  }

  render() {
    return (
      <nav className="amber darken-1 z-depth-1">
        <div className="nav-wrapper">
          <Link to={"/"} className="brand-logo left">
            CodeBuddy
          </Link>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth }; //  reducers/index.js object
}

export default connect(mapStateToProps)(Header);
