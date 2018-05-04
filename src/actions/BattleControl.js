import {progressEncounter} from "./EncounterControl";
import gameOver from "./gameOver";

let attack = (enemey, character) => {
  let enemeyHealth = enemey["health"] - character["attack"];
  let characterHealth = character["health"] - enemey["attack"];
  if (characterHealth < 0) {
    return (dispatch) => {
      dispatch(gameOver(enemey["name"]));
    };
  }
  else if (enemeyHealth <= 0) {
    return (dispatch) => {
      dispatch(progressEncounter());
    };
  }
  return {type:"ATTACK", characterHealth, enemeyHealth};
};

attack.toString = () =>  "ATTACK";


export default attack;
