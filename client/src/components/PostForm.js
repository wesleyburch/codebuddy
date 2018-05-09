// import React, { Component } from "react";
import React from "react";
import axios from "axios";

export default class NewPost extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      text: ""
    };
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log("STATE", this.state);
  };

  onSubmit = e => {
    e.preventDefault();
    // get our form data out of state
    const title = this.state.title;
    const text = this.state.text;
    axios.post("/api/posts/new", { title, text }).then(result => {
      //access the results here....
      console.log("SUCCESSFULLY POSTED");
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
        <h3 className="center-align">Create A Post!</h3>
        <div className="card-panel">
          <div className="row">
            <br />
            <form className="col s12" onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col s2" />
                <div className="input-field col s8">
                  <input
                    type="text"
                    name="title"
                    onChange={this.onChange}
                    placeholder="Title"
                  />
                </div>
                <div className="col s2" />
              </div>

              <div className="row">
                <div className="col s2" />
                <div className="input-field col s8">
                  <textarea
                    className="materialize-textarea"
                    name="text"
                    onChange={this.onChange}
                    placeholder="Enter a description of what you want to learn"
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
