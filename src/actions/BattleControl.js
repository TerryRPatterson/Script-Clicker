import {progressEncounter} from "./EncounterControl";
import gameOver from "./gameOver";

let attack = (character, enemy, encounterData) => {
  console.log(enemy);
  console.log(character);
  let enemyHealth = enemy["health"] - 1;
  let characterHealth = character["health"] - enemy["attack"];
  if (characterHealth <= 0) {
    return (dispatch) => {
      dispatch(gameOver(enemy["name"]));
    };
  }
  else if (enemyHealth <= 0) {
    return (dispatch) => {
      dispatch(progressEncounter(encounterData));
    };
  }
  return {type:"ATTACK", characterHealth, enemyHealth};
};

attack.toString = () =>  "ATTACK";


export default attack;
