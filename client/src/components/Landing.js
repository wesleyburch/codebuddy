// import Radium from "radium";
import React from "react";
import Posts from "./AllPosts";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div className="row">
        <div className="col s12" style={{ textAlign: "center" }}>
          <h5>Link up and learn!</h5>
          <p>Create a Post or look for buddies</p>
          <br />
          <button className="waves-effect btn">
            <Link to={"/posts/new"}>New Post</Link>
          </button>
          {/*Make a Reddit-like front page with each listing?...maybe filters by state or date... */}
          <br />
          <Posts />
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Landing;
