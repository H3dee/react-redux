import { CREATE_POST, FETCH_POSTS } from "../actionTypes/post";

const initialState = {
  posts: [],
  fetchedPosts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case FETCH_POSTS:
      return {
        ...state,
        fetchedPosts: action.payload,
      };
    default:
      return state;
  }
};
