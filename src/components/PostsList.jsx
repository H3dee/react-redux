import React from "react";
import Post from "./Post";

const PostsList = ({ posts }) => {
  if (
    (!Array.isArray(posts) && !posts.length) ||
    (Array.isArray(posts) && !posts.length)
  )
    return <div>There are no posts yet...</div>;

  return posts.map(post => <Post title={post} key={String(post)}/>)    
};

export default PostsList