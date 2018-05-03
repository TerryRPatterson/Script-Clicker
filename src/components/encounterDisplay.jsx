import React from "react";
import {connect} from "react-redux";
import {progressEncounter} from "../actions/EncounterControl";

import Line from "./dialogueLine";
import Battle from "./battle";
import Loading from "./loading";

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

  if (!currentEncounter) {
    return <Loading/>;
  }

  let scene = currentEncounter[currentEncounterProgress];

  if (scene["type"] === "DIALOGUE") {
    return <Line progressEncounter={progressEncounter} body={scene["body"]}
      speaker={scene["speaker"]} currentEncounter={currentEncounter}
      currentEncounterProgress={currentEncounterProgress}
      currentEncounterID={currentEncounterID}/>;
  }
  else if (scene["type"] === "BATTLE") {
    return <Battle progressEncounter={progressEncounter} enemy={scene["enemy"]}
    />;
  }
  else if (scene["type"] === "LOADING") {
    return <Loading/>;
  }
  return <Loading/>;
};

let encounterDisplayConnected = connect(mapStateToProps, mapDispatchToProps)(encounterDisplay);

export default encounterDisplayConnected;
