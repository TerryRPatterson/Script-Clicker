export let fetchToken = (userCredentials) =>
  fetch("/auth/login", {
    method: "POST",
    body: JSON.stringify(userCredentials),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });

export let registerUser = (userCredentials) => {
  fetch("/auth/create", {
    method: "POST",
    body: JSON.stringify(userCredentials),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
};
