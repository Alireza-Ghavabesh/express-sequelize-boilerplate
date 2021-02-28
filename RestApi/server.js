const { urlencoded } = require("body-parser");
const express = require("express");
var favicon = require("serve-favicon");
var path = require("path");
const http = require("http");

const app = express();
const server = http.createServer(app);

const port = 8000;

const sequelize = require("./../config/connection");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-methods", "GET,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(`/api`, require("./routes/api/user"));

sequelize.sync();
server.listen(port, () => {
  console.log("server started on port 8000");
});
