// import React, { Component } from "react";
import React from "react";
import axios from "axios";

export default class NewPost extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  onChange = e => {
    const url = this.props.location.pathname;
    const urlSplit = url.slice(7, url.length - 8);
    console.log(urlSplit);
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log("posting to: /api" + url);
  };

  onSubmit = e => {
    const url = this.props.location.pathname;
    const urlSplit = url.slice(7, url.length - 8);
    console.log(urlSplit);
    e.preventDefault();
    // get our form data out of state
    //console.log("URL: " + urlSplit);
    const text = this.state.text;
    axios.post("/api" + url, { text: text, url: urlSplit }).then(result => {
      //access the results here....
      console.log("COMMENT SUCCESSFULLY POSTED");
      if (result.data.redirect === "/") {
        window.location = "/";
      } else if (result.data.redirect === "/login") {
        window.location = "/login";
      }
    });
  };

  render() {
    return (
      <div>
        <h3 className="center-align">Leave a comment</h3>
        <div className="card-panel">
          <div className="row">
            <br />
            <form className="col s12" onSubmit={this.onSubmit}>
              {/* <div className="row">
                <div className="col s2" />
                <div className="input-field col s8">
                  <input type="text" name="name" onChange={this.onChange} />
                </div>
                <div className="col s2" />
              </div> */}

              <div className="row">
                <div className="col s2" />
                <div className="input-field col s8">
                  <textarea
                    className="materialize-textarea"
                    name="text"
                    onChange={this.onChange}
                    placeholder="Enter a comment here..."
                  />
                </div>
                <div className="col s2" />
              </div>

              <div className="row">
                <div className="col s4" />
                <div className="input-field col s4">
                  <button
                    className="btn waves-effect waves-light amber darken-2"
                    type="submit"
                  >
                    Submit!
                  </button>
                </div>
                <div className="col s4" />
              </div>
            </form>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}
