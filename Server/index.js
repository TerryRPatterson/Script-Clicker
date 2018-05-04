#! /usr/bin/env node

require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const {
  userLogin,
  userRegister,
  checkToken,
  createToken
} = require("./users");
const {
  getEncounter,
  loadData
} = require("./database");

const app = express();
let Router = express.Router;

app.use(cors());

let tokenApi = new Router();
tokenApi.post("/login", userLogin);
tokenApi.post("/register", userRegister);

let api = new Router();
api.use("/", checkToken);
api.get("/encounter/:id", getEncounter);
api.get("/load", loadData);
api.get("/test", (req, res) => {
  res.send("Yay!");
});

app.use(express.json());
app.use(express.urlencoded());
app.use("/auth", tokenApi);
app.use("/api", api);
app.use("/", (req, res, next) => {
  res.sendFile(process.env.PUBLICDIR + req.url);
});
app.use((err, req, res, next) => {
  res.sendFile(process.env.PUBLICDIR + "/index.html");
});


app.listen(process.env.PORT, () => console.log("Server is now listening.", process.env.PORT));
