

let verifyReducer = (state,{status, payload}) => {
  if (status === "complete") {
    return payload;
  }
  else if (status === "error") {
    localStorage.setItem("authorization", JSON.stringify(null));
    return null;
  }
};


export default verifyReducer;
