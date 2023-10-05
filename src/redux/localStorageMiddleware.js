// redux/localStorageMiddleware.js
export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  // Save the updated state to localStorage after each action
  const state = store.getState();
  localStorage.setItem('reduxState', JSON.stringify(state));

  return result;
};
