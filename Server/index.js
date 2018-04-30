#! /usr/bin/env node

console.log("Server Starting");

const {promisify} = require("util");
const express = require("express");
const app = express();
const publicDirPath = "/home/terryp/rpggame/build";




app.use("/",express.static(publicDirPath));


app.listen(3000, () => console.log("Server is now listening."));
