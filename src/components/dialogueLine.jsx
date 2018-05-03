import React from "react";
import PropTypes from "prop-types";


let dialougeLine = ({body, speaker, progressEncounter}) => {
  return <p onClick={progressEncounter}>
    {`${speaker}: ${body}`}
  </p>;
};

dialougeLine.propTypes = {
  body:PropTypes.string.isRequired,
  speaker:PropTypes.string.isRequired,
  progressEncounter:PropTypes.func.isRequired
};
export default dialougeLine;
