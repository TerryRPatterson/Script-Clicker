

export let addUserToStore = (userDetails) => ({
  type: "ADD_USER_TO_STORE",
  payload: { userDetails }
});

addUserToStore.toString = () => "ADD_USER_TO_STORE";
