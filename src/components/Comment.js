import React from "react";

function Comment({ data }) {
  return (
    <div className="comment">
      {console.log(data)}
      <div className="comment-avatar">
        <img className="avatar" src={data.author.avatar} />
      </div>
      <div className="comment-body">
        <div className="comment-style">
          <p className="comment-content">
            <span className="author-name">{data.author.name} </span>
            {data.content}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Comment;
