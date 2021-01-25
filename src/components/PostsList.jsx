import React from "react";
import Post from "./Post";
import {connect} from 'react-redux'

const PostsList = ({ syncPosts }) => {
  if (
    (!Array.isArray(syncPosts) && !syncPosts.length) ||
    (Array.isArray(syncPosts) && !syncPosts.length)
  )
    return <div>There are no posts yet...</div>;  

  return syncPosts.map(post => <Post title={post.title} key={String(post.id)}/>)    
};

const mapStateToProps = (state) => {
  return {
    syncPosts: state.posts.posts
  }
}

export default connect(mapStateToProps, null)(PostsList)