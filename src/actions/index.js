

export let addUserToStore = (userDetails) => ({
  type: "ADD_USER_TO_STORE",
  payload: { userDetails }
});

addUserToStore.toString = () => "ADD_USER_TO_STORE";

export let verify = (status, payload) => {
  if (status === "complete") {
    return ({
      type: "VERIFY",
      payload:payload });
    }
  else if (status === "start") {
    return ({
      type:"VERIFY",
      token:payload
    })
  }
  else if (status === "error") {
    return ({
      type:"error"
    })
  }
};

verify.toString = () => "VERIFY";
