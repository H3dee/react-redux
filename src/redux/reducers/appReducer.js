import { HIDE_LOADING, SHOW_LOADING } from "../actionTypes/app";

const initialValue = {
  loading: false,
};

export const appReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };
    case HIDE_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
