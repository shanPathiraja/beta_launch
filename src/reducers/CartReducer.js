const initialstate = {
  items: [{ itemName: "", price: "", qnty: 0 }],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
