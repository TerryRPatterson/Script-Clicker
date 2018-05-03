import React from "react";
import PropTypes from "prop-types";


let dialougeLine = ({body, speaker, progressEncounter,currentEncounterID,
  currentEncounter:encounter,
  currentEncounterProgress:progress}) => {
  return <p onClick={() => {
    progressEncounter({encounter, progress, currentEncounterID});
  }
  }>
    {`${speaker}: ${body}`}
  </p>;
};

dialougeLine.propTypes = {
  body:PropTypes.string.isRequired,
  speaker:PropTypes.string.isRequired,
  progressEncounter:PropTypes.func.isRequired,
  currentEncounter:PropTypes.array.isRequired,
  currentEncounterProgress:PropTypes.number.isRequired,
  currentEncounterID:PropTypes.number.isRequired
};
export default dialougeLine;
