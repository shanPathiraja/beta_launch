const initialstate = [
  {
    name: "inc Tshirt",
    price: 500,
    colors: ["black", "green"],
    brand: "inc",
    size: ["SM", "XL"],
  },
  {
    name: "adidass skirt",
    price: 3000,
    colors: ["blue", "green"],
    brand: "adidas",
    size: ["SM"],
  },
  {
    name: "inc denim",
    price: 5000,
    colors: ["black", "blue"],
    brand: "inc",
    size: ["SM", "XL"],
  },
  {
    name: "inc blouse",
    price: 6000,
    colors: ["black", "green"],
    brand: "inc",
    size: ["SM", "XL", "L", "XXL"],
  },
];

export default (state = initialstate, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
