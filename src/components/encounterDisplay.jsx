import React from "react";
import {connect} from "react-redux";
import {progressEncounter} from "../actions/EncounterControl";

import Line from "./dialogueLine";
import Battle from "./battle";

let mapStateToProps = ({currentEncounter, currentEncounterProgress,
  currentEncounterID}) => {
  return {currentEncounter, currentEncounterProgress, currentEncounterID};
};
let mapDispatchToProps = {
  progressEncounter
};
let encounterDisplay = (
  {
    currentEncounter, currentEncounterProgress, progressEncounter,
    currentEncounterID
  }) => {

  let scene = currentEncounter[currentEncounterProgress];

  if (scene["type"] === "dialouge") {
    return <Line progressEncounter={progressEncounter} body={scene["body"]}
      speaker={scene["speaker"]} currentEncounter={currentEncounter}
      currentEncounterProgress={currentEncounterProgress} 
      currentEncounterID={currentEncounterID}/>;
  }
  else if (scene["type"] === "battle") {
    return <Battle progressEncounter={progressEncounter} enemy={scene["enemy"]}
    />;
  }
};

let encounterDisplayConnected = connect(mapStateToProps, mapDispatchToProps)(encounterDisplay);

export default encounterDisplayConnected;
