// import React, { Component } from "react";
import React from "react";

const NewPost = () => {
  return (
    <div className="container">
      <h3 className="center-align">Create A Post!</h3>
      <div className="card-panel">
        <div className="row">
          <br />
          <form className="col s12">
            <div className="row">
              <div className="col s2" />
              <div className="input-field col s8">
                <input type="text" placeholder="Title" />
              </div>
              <div className="col s2" />
            </div>

            <div className="row">
              <div className="col s2" />
              <div className="input-field col s8">
                <input type="text" placeholder="What Programming Language?" />
              </div>
              <div className="col s2" />
            </div>

            <div className="row">
              <div className="col s2" />
              <div className="input-field col s8">
                <input type="text" placeholder="Your Location: i.e. Tucson" />
              </div>
              <div className="col s2" />
            </div>

            <div className="row">
              <div className="col s2" />
              <div className="input-field col s8">
                <textarea
                  className="materialize-textarea"
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
                  name="action"
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
};

export default NewPost;
