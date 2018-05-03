let newEncounterReducer = (state, {nextEncounter:currentEncounter,
  nextEncounterID:currentEncounterID}) => {
  return ({...state, currentEncounter, currentEncounterID});
};

export default newEncounterReducer;
