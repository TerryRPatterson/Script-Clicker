export let fetchToken = (userCredentials) =>
  fetch("https://dc-rpg.herokuapp.com/api/login", {
    method: "POST",
    body: JSON.stringify(userCredentials),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });

export let registerUser = (userCredentials) =>
  fetch("https://dc-rpg.herokuapp.com/api/create", {
    method: "POST",
    body: JSON.stringify(userCredentials),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });