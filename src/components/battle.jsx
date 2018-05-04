import React from "react";
import {lifecycle} from "recompose";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import newBattleAction from "../actions/newBattle.js";
import attackAction from "../actions/BattleControl.js";

let mapStateToProps = ({character, battleEventList, currentEncounter,
  currentEncounterProgress, currentEncounterID}) => {
  return {character, battleEventList, currentEncounter,
    currentEncounterProgress, currentEncounterID};
};

let mapDispatchToProps = (dispatch) => {
  let attack = (enemy, character, encounterData) => {
    dispatch(attackAction(enemy,character, encounterData));
  };
  let newBattle =  () => {
    dispatch(newBattleAction());
  };
  return {newBattle, attack};
};

let lifecycleConfig = {
  componentDidMount() {
    let {newBattle} = this.props;
    newBattle();
  }
};

let Battle = ({battleEventList =[], character, currentEncounter,
  currentEncounterProgress, attack, currentEncounterID}) => {
  let encounterData = {encounter:currentEncounter,
    progress:currentEncounterProgress, currentEncounterID};
  let enemy = currentEncounter[currentEncounterProgress]["enemy"];
  let battleDomList = battleEventList.map( (event, index) => {
    return <div className="logEntry" key={index}>{event}</div>;
  });
  return <div className="Battle">
    <div className="status">
      <div className="enemyName">{enemy["name"]}</div>
      <div className="enemyHealth">{enemy["health"]}</div>
      <div className="characterName">{character["name"]}</div>
      <div className="characterHealth">{character["health"]}</div>
    </div>
    <div className="log">{battleDomList}</div>
    <input type="button" className="attack" onClick={() => {
      attack(character, enemy, encounterData);
    }} value="Attack"/>
  </div>;
};

Battle.propTypes = {
  battleEventList:PropTypes.array.isRequired,
  character:PropTypes.object.isRequired,
  currentEncounter:PropTypes.object.isRequired,
  currentEncounterProgress:PropTypes.number.isRequired,
  attack:PropTypes.func.isRequired,
  currentEncounterID:PropTypes.number.isRequired
};

let BattleLife = lifecycle(lifecycleConfig)(Battle);
let connectedBattle = connect(mapStateToProps, mapDispatchToProps)(BattleLife);

export default connectedBattle;
