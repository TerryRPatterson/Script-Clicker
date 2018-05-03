import {getEncounter} from "../lib/api-calls";



export let newEncounter = (nextEncounter, nextEncounterID) => {
  return (
    {
      type:"NEW_ENCOUNTER",
      nextEncounter,
      nextEncounterID});
};

newEncounter.toString = () => "NEW_ENCOUNTER";


export let progressEncounter = ({encounter, progress, currentEncounterID}) => {
  let maxEncounter = encounter.length - 1;
  if (progress === maxEncounter) {
    return async (dispatch) => {
      let nextEncounterID = currentEncounterID + 1;
      let encounterRAW = await getEncounter(nextEncounterID);
      let encounter = await encounterRAW.json();
      dispatch(newEncounter(encounter, nextEncounterID));
    };
  }
  else {
    return ({type:"PROGRESS_ENCOUNTER"});
  }

};

progressEncounter.toString = () => "PROGRESS_ENCOUNTER";
