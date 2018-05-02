export let fetchToken = (userCredentials) =>
  fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(userCredentials),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });

export let registerUser = (userCredentials) => {
  fetch("/api/create", {
    method: "POST",
    body: JSON.stringify(userCredentials),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
};
