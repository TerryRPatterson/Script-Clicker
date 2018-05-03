#! /usr/bin/env node

require('dotenv-safe').config();
const express = require("express");
const {
  userLogin,
  userRegister,
  checkToken,
  createToken
} = require('./users');

const app = express();
let Router = express.Router;

let tokenApi = new Router();
tokenApi.post("/login", userLogin);
tokenApi.post("/register", userRegister);

let api = new Router();
api.use("/", checkToken);
api.get("/test", (req, res) => {
  res.send("Yay!");
});

app.use(express.json());
app.use(express.urlencoded());
app.use("/auth", tokenApi);
app.use("/api", api);
app.use("/", express.static(process.env.PUBLICDIR));

app.listen(process.env.PORT, () => console.log("Server is now listening.", process.env.PORT));
