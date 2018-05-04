import deepClone from "lodash/cloneDeep";

let attackReducer = (state, {characterHealth, enemyHealth}) => {

  let {currentEncounter, currentEncounterProgress, character} = state;
  let encounter = deepClone(currentEncounter);
  let enemy = encounter[currentEncounterProgress]["enemy"];
  enemy["health"] = enemyHealth;
  character["health"] = characterHealth;
  return {...state, currentEncounter:encounter, character};
};

export default attackReducer;
