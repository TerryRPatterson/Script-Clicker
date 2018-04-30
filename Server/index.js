#! /usr/bin/env node

console.log("Server Starting");

const express = require("express");
const app = express();
const publicDirPath = "/home/terryp/rpggame/build"; // need to set up env

app.use("/",express.static(publicDirPath));

app.listen(3000, () => console.log("Server is now listening."));
