import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/actionCreators";
import { Loader } from "./Loader";
import Post from "./Post";

const FetchedPostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);
  const loading = useSelector((state) => state.app.loading);

  if (loading) return <Loader />;

  if (
    (!Array.isArray(posts) && !posts.length) ||
    (Array.isArray(posts) && !posts.length)
  )
    return (
      <button
        onClick={() => dispatch(fetchPosts())}
        className="btn btn-primary"
      >
        Download
      </button>
    );

  return posts.map((post) => <Post title={post.title} key={String(post.id)} />);
};

export default FetchedPostsList;
