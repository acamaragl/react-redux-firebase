import {  FETCH_MAP } from "../actions/types"; //FETCH_TODOS,

export default (state = "loading", action) => {
  switch (action.type) {
    case FETCH_MAP:
      let map = {
        selectedId:action.selectedId,
        buildings: action.payload
      }
      return map;
    default:
      return state;
  }
};
