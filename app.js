const express = require("express");
const bodyParser = require("body-parser");
const apiRouter = require("./server/routes/router");
const cors = require("cors");
require("./server/models/db");

let allowedOrigins = ["http://localhost:3000","http://affectionate-easley-0d9aa3.netlify.app/"];
const app = express();
const port = process.env.PORT || "80";
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    cors({
        credentials: true,
        origin: allowedOrigins,
    })
);

//require('dotenv').config();

//routing
app.use("/", apiRouter);

app.listen(port, () => {
    console.log("API listening on port " + port);
});

module.exports = app;
