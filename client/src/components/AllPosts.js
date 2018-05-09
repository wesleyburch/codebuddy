import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "../styles/cards.css";

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    axios.get("/api/posts").then(res => {
      const posts = res.data;
      this.setState({ posts });
    });
  }
  render() {
    return (
      <div className="allPostContainer">
        <ul className="posts">
          {this.state.posts.map(post => (
            <li className="eachPost" key={post._id}>
              <p className="postParTitle">
                <a className="postLinkTitle" href={"/posts/" + post._id}>
                  {post.title}
                </a>
              </p>
              <div className="flexContainer">
                <p className="postPar">
                  {post.text.slice(0, 80)}...{" "}
                  <a className="pLink" href={"/posts/" + post._id}>
                    continue reading
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
