import { HIDE_LOADING, SHOW_LOADING } from "../actionTypes/app";
import { CREATE_POST, FETCH_POSTS } from "../actionTypes/post";

export const showLoading = () => ({
  type: SHOW_LOADING,
});

export const hideLoading = () => ({
  type: HIDE_LOADING,
});

export const createPost = (post) => ({
  type: CREATE_POST,
  payload: post,
});

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(showLoading());
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5",
      { method: "GET" }
    );
    const data = await response.json();
    dispatch({
      type: FETCH_POSTS,
      payload: data,
    });
    dispatch(hideLoading());
  };
};
