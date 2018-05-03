import {newEncounter} from "./EncounterControl";
import {getEncounter} from "../lib/api-calls";

let verify = (status, payload) => {
  if (status === "start"){
    let token = `Bearer ${payload}`;
    console.log(token);
    return async (dispatch) => {
      let response = await fetch("http://localhost:3001/api/load",{
        method:"GET",
        headers: new Headers({
          authorization:token,
          mode:"cors"})
      });
      if (response.status === 401) {
        dispatch(verify("error", response.status));
      }
      else if (response.status === 200) {
        let newState = await response.json();
        let {currentEncounterID:nextEncounterID} = newState;
        dispatch(verify("complete", newState));
        let encounterRAW = await getEncounter(nextEncounterID);
        let encounter = await encounterRAW.json();
        dispatch(newEncounter(encounter, nextEncounterID));
      }
    };
  }
  else if (status === "complete") {
    return ({
      type:"VERIFY",
      status:status,
      payload:payload
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

export default verify;
