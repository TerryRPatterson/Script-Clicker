import {getEncounter} from "../lib/api-calls";
import {newEncounter} from "../actions/EncounterControl";

let progressEncounterReducer = (state) => {
  let {currentEncounter,
    currentEncounterProgress, currentEncounterID } = state;
  let maxEncounter = currentEncounter.length - 1;
  if (currentEncounterProgress === maxEncounter) {
    return async (dispatch) => {
      let nextEncounterID = currentEncounterID + 1;
      let encounter = await getEncounter(nextEncounterID);
      dispatch(newEncounter(encounter, nextEncounterID));
      return state;
    };
  }
  else {
    return {...state, currentEncounterProgress: currentEncounterProgress + 1};
  }

};

export default progressEncounterReducer;
