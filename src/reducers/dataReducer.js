import {  FETCH_GRUPO17 } from "../actions/types"; //FETCH_TODOS,

export default (state = "loading", action) => {
  switch (action.type) {
    case FETCH_GRUPO17:
      return action.payload;
    default:
      return state;
  }
};
