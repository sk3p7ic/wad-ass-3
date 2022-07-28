require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const port = 5000;

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.render("index", { formSubmitted: false });
});

mongoose.connect(process.env.MONGO_CONN_STRING);

app.listen(port, () => console.log(`Started listening on ${port}`));
