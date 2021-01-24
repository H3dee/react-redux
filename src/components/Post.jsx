import React from "react";

const Post = ({ title }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">Title here {title}</div>
      </div>
    </div>
  );
};

export default Post
