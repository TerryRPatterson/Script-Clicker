import {newEncounter} from "./EncounterControl";

let gameOver = (enemyName) => {
  let message;
  if (enemyName) {
    message ="It was at this point our hero's"+
        `journey came to an end at the hands of ${enemyName}.`;
  }
  else {
    message ="It was at this time the hero's journey ended for an unknown"+
    " reason.";
  }
  return {type:newEncounter.toString(),
    nextEncounter:{type:"GAME_OVER", message}};
};

gameOver.toString = () => "GAME_OVER";

export default gameOver;
