// import Radium from "radium";
import React from "react";

const Landing = () => {
  return (
    <div className="container">
      <div className="row">
        <br />
        <br />
        <div className="col s12" style={{ textAlign: "center" }}>
          <h1>CodeBuddy</h1>
          <h5>What do you want to learn today?</h5>
          <p>Search your city for code buddies!</p>{" "}
          {/*Make a Reddit-like front page with each listing?...maybe filters by state or date... */}
          <br />
        </div>
        <br />
        <br />
        <form className="col s12">
          <div className="input-field col s12">
            <input type="text" placeholder="Search Your City..." />
          </div>
          <div className="col s4" />
          <div className="input-field col s4">
            <button
              className="btn waves-effect waves-light amber darken-2"
              type="submit"
              name="action"
            >
              Let's Learn!
            </button>
          </div>
          <div className="col s4" />
        </form>
      </div>
    </div>
  );
};

export default Landing;
