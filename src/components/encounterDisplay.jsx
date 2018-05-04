import React from "react";
import {connect} from "react-redux";
import {progressEncounter} from "../actions/EncounterControl";
import PropTypes from "prop-types";

import Line from "./dialogueLine";
import Battle from "./battle";
import Loading from "./loading";
import Victory from "./victory";

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
  else if (scene["type"] === "COMBAT") {
    return <Battle/>;
  }
  else if (scene["type"] === "LOADING") {
    return <Loading/>;
  }
  else if (scene["type"] === "VICTORY") {
    return <Victory/>;
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
