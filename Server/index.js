#! /usr/bin/env node

console.log("Server Starting");

require("dotenv-safe").config()

const express = require("express");
const app = express();

app.use("/",express.static(process.env.PUBLICDIR));

app.listen(process.env.PORT || 3000, () => console.log("Server is now listening."));
