import { combineReducers } from "redux";

import CartReducer from "./CartReducer";
import ItemReducer from "./ItemReducer";
import FilterReducer from "./FilterReducer";

export default combineReducers({
  cart: CartReducer,
  items: ItemReducer,
  filters: FilterReducer,
});
