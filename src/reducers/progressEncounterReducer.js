
let progressEncounterReducer = (action , state) => {
  let {currentEncounter,
    currentEncounterProgress, currentEncounterID } = state;
  let maxEncounter = currentEncounter.length - 1;
  if (currentEncounterProgress === maxEncounter) {
    //fetch Next Encounter from backend
  }
  else {
    return {...state, currentEncounterProgress: currentEncounterProgress + 1};
  }

};
