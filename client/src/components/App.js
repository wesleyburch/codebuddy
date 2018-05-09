import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux"; // gives components ability to call action creators
import * as actions from "../actions"; // import all action creators from our actions.js file
import "../styles/all.css";

import Header from "./Header";
import Landing from "./Landing";
import PostForm from "./PostForm";
import NewComment from "./Comment";
import ShowPost from "./ShowPost";
import Footer from "./Footer";
const Dashboard = () => <h3>All Posts</h3>;

class App extends Component {
  componentDidMount(props) {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/posts/new" component={PostForm} />
            <Route exact path="/posts/:id" component={ShowPost} />
            <Route exact path="/posts/:id/comment" component={NewComment} />
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default connect(null, actions)(App);
