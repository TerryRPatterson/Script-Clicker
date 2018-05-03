
export let progressEncounter = () => {
  return ({type:"PROGRESS_ENCOUNTER"});
};

progressEncounter.toString = () => "PROGRESS_ENCOUNTER";

export let newEncounter = (nextEncounter, nextEncounterID) => {
  return (
    {
      type:"NEW_ENCOUNTER",
      nextEncounter,
      nextEncounterID});
};

newEncounter.toString = () => "NEW_ENCOUNTER";
