import React from "react";
import {connect} from "react-redux";
import {progressEncounter} from "EncounterControl";

import Line from "./dialougeLine";
import Battle from "./battle";

let mapStateToProps = ({currentEncounter, currentEncounterProgress}) => {
  return {currentEncounter, currentEncounterProgress};
};
let mapDispatchToProps = {
  progressEncounter
};
let encounterDisplay = (
  {
    currentEncounter, currentEncounterProgress, progressEncounter
  }) => {
  let scene = currentEncounter[currentEncounterProgress];
  if (scene["type"] === "dialouge") {
    return <Line progressEncounter={progressEncounter} body={scene["body"]}
      speaker={scene["speaker"]}/>;
  }
  else if (scene["type"] === "battle") {
    return <Battle progressEncounter={progressEncounter} enemy={scene["enemy"]}
    />;
  }
};

let encounterDisplayConnected = connect(mapStateToProps, mapDispatchToProps)(encounterDisplay);

export default encounterDisplayConnected;
