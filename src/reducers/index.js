const initialState = {
  currentLocation: "",
  currentEncounter: [],
  inventory: {},
  characterId: "",
  playerId: "",
  currentLevel: 0,
  characterHealth: 0
};

let reducers = {

};

let fallbackReducer = state => state;

let reducer = (state = initialState, action) => {
  let miniReducer = reducers[action.type];
  miniReducer = miniReducer || fallbackReducer;
  let newState = miniReducer(state, action);
  return newState;
};

export default reducer;