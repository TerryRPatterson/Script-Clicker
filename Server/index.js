#! /usr/bin/env node
require('dotenv-safe').config();
const express = require("express");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { findUserByEmail } = require('./database');

const app = express();
let Router = express.Router;

let checkToken = async (req, res, next) => {
  let { authorization: token } = req.headers;
  let payload;
  try {
    payload = jwt.verify(token, process.env.SIGNATURE);
  } catch(err) {
    console.log(err);
  }

  if (payload) {
    req.jwt = payload;
    next();
  } else {
    res.send(401);
  }
};

let createToken = user =>
  jwt.sign(
    { userId: user.id },
    process.env.SIGNATURE,
    { expiresIn: '7d' }
  );

let userLogin = async (req, res) => {
  let { email, password } = req.body;
  let user = await findUserByEmail(email);

  let isValid = await bcrypt.compare(password, user.pass);
  if (isValid) {
    let token = createToken(user);
    res.send(token);
  } else {
    res.send(401, "Missing/Incorrect Password");
  }
};

let userRegister = (req, res) => {
  res.send("You went to Register!");
};

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
app.use("/",express.static(process.env.PUBLICDIR));
app.use("/", (req, res, next) => {
  res.sendFile(`${process.env.PUBLICDIR}${req.url}`);
});

app.listen(process.env.PORT || 3000, () => console.log("Server is now listening."));
