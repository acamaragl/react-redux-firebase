import { combineReducers } from "redux";

import data from "./dataReducer";
import msgs from "./msgReducer";
import map from "./mapReducer";

export default combineReducers({
  data: data,
  msgs: msgs,
  map: map
});
