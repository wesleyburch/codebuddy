import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux"; // gives components ability to call action creators
import * as actions from "../actions"; // import all action creators from our actions.js file

import Header from "./Header";
import Landing from "./Landing";
import NewPost from "./NewPost";
const Dashboard = () => <h2>Dashboard</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/posts" component={Dashboard} />
            <Route path="/posts/new" component={NewPost} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
