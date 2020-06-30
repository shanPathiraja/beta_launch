import {
  SEARCH_FILTER,
  BRAND_FILTER,
  CATOGERY_FILTER,
  COLOR_FILTER,
  PRICE_FILTER,
} from "../types/FilterType";

const initialstate = {
  search: "",
  color: "",
  brand: "",
  price: [100, 10000],
  size: "",
  catogery: "",
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case SEARCH_FILTER:
      console.log(action.data);
      state = { ...state, search: action.data };
      return state;
    case PRICE_FILTER:
      state = { ...state, price: action.data };
      return state;
    case COLOR_FILTER:
      state = { ...state, color: action.data };
      return state;
    case BRAND_FILTER:
      state = { ...state, brand: action.data };
      return state;
    case CATOGERY_FILTER:
      state = { ...state, catogery: action.data };
      return state;

    default:
      return state;
  }
};
