import React from "react";
import Post from "./Post";

const FetchedPostsList = ({ posts }) => {
  if (
    (!Array.isArray(posts) && !posts.length) ||
    (Array.isArray(posts) && !posts.length)
  )
    return <button className="btn btn-primary">Download</button>;

  return posts.map((post) => <Post title={post} key={String(post)} />);
};

export default FetchedPostsList;
