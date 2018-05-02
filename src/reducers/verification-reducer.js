import {verify} from "./actions";
let verifyReducer = (action) => {
  if (status === "start"){
    return async (dispatch) => {
      let payload = await fetch({
        url:"/api/load",
        authorization:`Bearer ${action["token"]}`
      })
      if (payload.status === 401) {
        dispatch(verify("error", payload.status));
      }
      else if (payload.status === 200) {
        dispatch(verify("complete",await payload.json));
      }
    };
  }
  else if (status === "complete") {
    return action["payload"];
  }
  else if (status === "error") {
      localStorage.setItem("authorization", JSON.stringify(null));
    return null;
  }
};


export default verifyReducer;
