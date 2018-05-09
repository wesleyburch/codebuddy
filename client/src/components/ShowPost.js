import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "../styles/cards.css";
import "../styles/comments.css";

export default class UserPost extends React.Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }

  componentDidMount() {
    const url = this.props.location.pathname;
    //console.log("URL: " + urlSplit);
    axios.get("/api" + url).then(res => {
      const posts = res.data;
      //console.log(this.props.location);
      this.setState({ posts });
      console.log(posts);
    });
  }
  render() {
    if (!this.state.posts._comments) {
      return null;
    }
    return (
      <div className="onePost">
        <h4 className="postTitle"> {this.state.posts.title}</h4>
        <p className="postAuthor">posted by: {this.state.posts._author}</p>
        <p className="postText"> {this.state.posts.text}</p>
        <br />
        <a
          className="postLink "
          href={this.props.location.pathname + "/comment"}
        >
          Leave a comment
        </a>
        <a className="backLink " href={"/"}>
          Go Back
        </a>
        <br />
        <hr />
        <br />
        <div className="commentDiv">
          <ul>
            {this.state.posts._comments.map(comment => (
              <li className="eachComment" key={comment._id}>
                <p className="commentText">{comment.text}</p>
                <p className="commentAuthor"> user: {comment._author}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      //   <div className="onePost">
      //     {this.state.posts.map(post => (
      //       <li className="eachPost" key={post.title}>
      //         <p className="postParTitle">
      //           <a className="postLinkTitle" href={"/post/" + post._id}>
      //             {post.title}
      //           </a>
      //         </p>
      //         <div className="flexContainer">
      //           <p className="postPar">{post._id}</p>
      //           <p className="postLink">
      //             <a>continue reading...</a>
      //           </p>
      //         </div>
      //       </li>
      //     ))}
      //   </div>
    );
  }
}
