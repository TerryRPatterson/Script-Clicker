let newEncounterReducer = (state, {nextEncounter:currentEncounter,
  nextEncounterID:currentEncounterID}) => {
    console.log("New Encounter");
  console.log(currentEncounter, currentEncounterID);
  return ({...state, currentEncounter, currentEncounterID,
    currentEncouterProgress:0});
};

export default newEncounterReducer;
