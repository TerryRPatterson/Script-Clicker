export let addUserToStoreReducer = (state, action) => ({
  ...state,
  user: action.payload.userDetails
});