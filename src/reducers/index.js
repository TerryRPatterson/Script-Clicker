import { addUserToStore } from "../actions/index";
import { addUserToStoreReducer } from "./reducer-fns";
import {progressEncounter} from "../actions/EncounterControl";
import progressEncounterReducer from "./progressEncounterReducer";

let testLine = {type:"dialouge", speaker:"Test", body:"Hello"};
let testLine2 = {type:"dialouge", speaker:"Test2", body:"sup"}
let testEncounter = [];
testEncounter.push(testLine);
testEncounter.push(testLine2);
const initialState = {
  user: {},
  inventory: {},
  characterId: "",
  playerId: "",
  currentEncounter: testEncounter,
  currentEncounterProgress:0,
  currentLocation: "",
  characterHealth: 0
};

let reducers = {
  [addUserToStore]: addUserToStoreReducer,
  [progressEncounter]: progressEncounterReducer
};

let fallbackReducer = state => state;

let reducer = (state = initialState, action) => {
  let miniReducer = reducers[action.type];
  miniReducer = miniReducer || fallbackReducer;
  let newState = miniReducer(state, action);
  return newState;
};

export default reducer;
