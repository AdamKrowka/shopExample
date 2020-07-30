export const changeCardData = (data) => ({
  type: "changeCardData",
  data,
});

export const validateCardData = (element, value) => ({
  type: "validate",
  element,
  value,
});
