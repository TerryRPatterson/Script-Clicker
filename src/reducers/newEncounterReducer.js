let newEncounterReducer = (state, {nextEncounter:currentEncounter,
  nextEncounterID:currentEncounterID}) => {
  return ({...state, currentEncounter, currentEncounterID,
    currentEncouterProgress:0});
};

export default newEncounterReducer;
