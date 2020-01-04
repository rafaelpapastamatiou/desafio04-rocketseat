import React, { Component } from "react";
import Comment from "./Comment";

class Post extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="post">
        <div className="post-head">
          <img className="avatar" src={data.author.avatar} />
          <div className="post-head-author">
            <span className="author-name">{data.author.name}</span>
            <span className="post-date">{data.date}</span>
          </div>
        </div>
        <div className="post-body">
          <span className="post-content">{data.content}</span>
        </div>
        <hr />
        <div className="comments-container">
          {data.comments.map(comment => {
            return <Comment data={comment} key={comment.id} />;
          })}
        </div>
      </div>
    );
  }
}
export default Post;
