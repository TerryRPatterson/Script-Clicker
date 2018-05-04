import deepClone from "lodash/cloneDeep";

let attackReducer = (state, {characterHealth, enemeyHealth}) => {

  let {currentEncounter, currentEncounterProgress, character} = state;
  let encounter = deepClone(currentEncounter);
  let enemey = encounter[currentEncounterProgress];
  enemey["health"] = enemeyHealth;
  character["health"] = characterHealth;
  return {...state, currentEncounter:encounter, character};
};

export default attackReducer;
