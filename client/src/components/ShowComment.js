import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "../styles/cards.css";

export default class PostComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] };
  }

  componentDidMount() {
    const url = this.props.location.pathname;
    //const urlSplit = url.slicse(7, url.length);
    //console.log("URL: " + urlSplit);
    axios.get("/api/" + url).then(res => {
      const posts = res.data;
      //console.log(this.props.location);
      const comments = res.data;
      console.log(comments);
      console.log(this.props.location.pathname);
      this.setState({ comments });
    });
  }
  render() {
    return (
      <div className="oneComment">
        <ul className="commentsUL">
          {/* {this.state.comments._comments.map(comment => (
            <li className="eachPost" key={comment._id}>
              <p>{comment.text}</p>
            </li>
          ))} */}
          <p> hi</p>
        </ul>
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
