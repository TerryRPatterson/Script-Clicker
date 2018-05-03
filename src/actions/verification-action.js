export let verify = (status, payload) => {
  if (status === "start"){
    return async (dispatch) => {
      let response = await fetch({
        url:"/api/load",
        authorization:`Bearer ${payload}`
      });
      if (response.status === 401) {
        dispatch(verify("error", response.status));
      }
      else if (response.status === 200) {
        dispatch(verify("complete",await response.json()));
      }
    };
  }
  else if (status === "start") {
    return ({
      type:"VERIFY",
      status:status,
      token:payload
    });
  }
  else if (status === "error") {
    return ({
      status:status,
      type:"VERIFY",
    });
  }
};

verify.toString = () => "VERIFY";
