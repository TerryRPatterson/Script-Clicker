import React from "react";
import PropTypes from "prop-types";
import "./css/dialogue.css";


let dialougeLine = ({ body, speaker, progressEncounter, currentEncounterID,
  currentEncounter: encounter,
  currentEncounterProgress: progress }) => {
  return (
    <div className="dialogue">
      <div className="dialogueText">
        <div className="speaker">
          {speaker}:
        </div>
        <div className="body">
          {body}
        </div>
      </div>
      <div className="dialogueMenu">
        <button className="nextButton" onClick={() => {
          progressEncounter({ encounter, progress, currentEncounterID });
        }}>
          Next
        </button>
      </div>
    </div>
  );
};

dialougeLine.propTypes = {
  body: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  progressEncounter: PropTypes.func.isRequired,
  currentEncounter: PropTypes.array.isRequired,
  currentEncounterProgress: PropTypes.number.isRequired,
  currentEncounterID: PropTypes.number.isRequired
};
export default dialougeLine;
