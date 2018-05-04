import {newEncounter} from "./EncounterControl";

let gameOver = (enemeyName) => {
  let message;
  if (enemeyName) {
    message ="It was at this point our hero's"+
        `journey came to an end at the hands of ${enemeyName}.`;
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
