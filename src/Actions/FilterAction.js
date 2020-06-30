import {
  SEARCH_FILTER,
  BRAND_FILTER,
  CATOGERY_FILTER,
  COLOR_FILTER,
  PRICE_FILTER,
} from "../types/FilterType";
export const FilterSearch = (para) => {
  console.log(para);
  return (dispatch) => {
    dispatch({
      type: SEARCH_FILTER,
      data: para,
    });
  };
};

export const FilterPrice = (para) => {
  console.log(para);
  return (dispatch) => {
    dispatch({
      type: PRICE_FILTER,
      data: para,
    });
  };
};
export const FilterColor = (para) => {
  console.log(para);
  return (dispatch) => {
    dispatch({
      type: COLOR_FILTER,
      data: para,
    });
  };
};
export const FilterBrand = (para) => {
  console.log(para);
  return (dispatch) => {
    dispatch({
      type: BRAND_FILTER,
      data: para,
    });
  };
};
export const FilterCatogery = (para) => {
  console.log(para);
  return (dispatch) => {
    dispatch({
      type: CATOGERY_FILTER,
      data: para,
    });
  };
};
