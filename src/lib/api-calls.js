export let fetchToken = (userCredentials) => {
  return fetch("/auth/login", {
    method: "POST",
    body: JSON.stringify(userCredentials),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
};
export let registerUser = (userCredentials) => {
  return fetch("/auth/create", {
    method: "POST",
    body: JSON.stringify(userCredentials),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
};

export let getEncounter = (currentEncounter) => {
  return fetch(`/api/encounter/${currentEncounter}`,{
    method:"GET",
    headers: new Headers({
      "Content-Type": "application/json",
      "authorization": `Bearer ${localStorage.getItem("authorization")}`,
    })
  });
};
