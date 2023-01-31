export const addToStorage = (value) => {
  localStorage.setItem("cartPicture", JSON.stringify(value));
};
export const removeFromStorage = (value) => {
  localStorage.setItem("cartPicture", JSON.stringify(value));
};
export const checkStorage = () => {
  const store = JSON.parse(localStorage.getItem("cartPicture")) || [];
  return store;
};
export const findIteminStorage = (id) => {
  return checkStorage().find((el) => el.id === id);
};
