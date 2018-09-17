import { FETCH_MSGS } from "../actions/types";

export default (state = "loading", action) => {
  switch (action.type) {
    case FETCH_MSGS:
      return action.payload;
    default:
      return state;
  }
};
