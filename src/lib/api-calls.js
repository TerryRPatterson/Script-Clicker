export let fetchToken = (userCredentials) =>{
  return fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(userCredentials),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
};
export let registerUser = (userCredentials) => {
  return fetch("/api/create", {
    method: "POST",
    body: JSON.stringify(userCredentials),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
};

export let getEncounter = (currentEncounter) => {
  console.log("get encounter");
  return fetch(`/api/encounter/${currentEncounter}`,{
    method:"GET",
    headers: new Headers({
      "Content-Type": "application/json",
      "authorization": `Bearer ${localStorage.getItem("authorization")}`,
    })
  });
};
