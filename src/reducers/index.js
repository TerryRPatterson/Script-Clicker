import { addUserToStore, verify } from "../actions";
import { addUserToStoreReducer } from "./reducer-fns";
import verifyReducer from "./verification-reducer";

const initialState = {
  currentEncounter:[],
  currentEncounterID: 0,
  currentEncouterProgress:0,
  inventory: [],
  player:{
    name:null,
    id:null
  },
  character:{
    health:0,
    id:null,
    name:null
  }
};

let reducers = {
  [addUserToStore]: addUserToStoreReducer,
  [verify]: verifyReducer
};

let fallbackReducer = state => state;

let reducer = (state = initialState, action) => {
  let miniReducer = reducers[action.type];
  miniReducer = miniReducer || fallbackReducer;
  let newState = miniReducer(state, action);
  return newState;
};

export default reducer;
