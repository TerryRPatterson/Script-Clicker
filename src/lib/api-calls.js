export let fetchToken = (userCredentials) =>
  fetch(`${process.env.BACKEND}/api/login`, {
    method: "POST",
    body: JSON.stringify(userCredentials),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });

export let registerUser = (userCredentials) => {
  console.dir(process.env);
  fetch(`${process.env.BACKEND}/api/create`, {
    method: "POST",
    body: JSON.stringify(userCredentials),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });
};
