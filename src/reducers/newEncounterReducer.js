let newEncounterReducer = (state, {nextEncounter:currentEncounter,
  nextEncounterID:currentEncounterID}) => {
  return ({...state, currentEncounter, currentEncounterID,
    currentEncounterProgress:0});
};

export default newEncounterReducer;
