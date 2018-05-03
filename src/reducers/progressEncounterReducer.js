

let progressEncounterReducer = (state) => {
  let {currentEncounterProgress} = state;
  return {...state, currentEncounterProgress: currentEncounterProgress + 1};
};


export default progressEncounterReducer;
