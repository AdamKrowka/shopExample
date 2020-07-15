const addressData = (
  state = {
    name: "",
    lastName: "",
    address: "",
    postalCode: "",
    city: "",
    country: "",
    phoneNumber: "",
  },
  { type, data }
) => {
  switch (type) {
    case "changeData":
      return data;

    default:
      return state;
  }
};

export default addressData;
