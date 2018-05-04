import React from "react";
import {connect} from "react-redux";
import {progressEncounter} from "../actions/EncounterControl";
import PropTypes from "prop-types";

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
    console.log("test1");
    return <Loading/>;
  }

  let scene = currentEncounter[currentEncounterProgress];
  console.log(scene);
  console.log(scene["type"] === "DIALOGUE")
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
    console.log("Test2");
    return <Loading/>;
  }
  return <Loading/>;
};

encounterDisplay.propTypes = {
  currentEncounter:PropTypes.array.isRequired,
  currentEncounterProgress:PropTypes.number.isRequired,
  currentEncounterID:PropTypes.number.isRequired,
  progressEncounter:PropTypes.func.isRequired
};

let encounterDisplayConnected = connect(mapStateToProps, mapDispatchToProps)(encounterDisplay);

export default encounterDisplayConnected;
