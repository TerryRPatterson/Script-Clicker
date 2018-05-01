import { addUserToStore } from "../actions/index";
import { addUserToStoreReducer } from "./reducer-fns";

const initialState = {
  user: {},
  inventory: {},
  characterId: "",
  playerId: "",
  currentEncounter: [],
  currentLevel: 0,
  currentLocation: "",
  characterHealth: 0
};

let reducers = {
  [addUserToStore]: addUserToStoreReducer
};

let fallbackReducer = state => state;

let reducer = (state = initialState, action) => {
  let miniReducer = reducers[action.type];
  miniReducer = miniReducer || fallbackReducer;
  let newState = miniReducer(state, action);
  return newState;
};

export default reducer;