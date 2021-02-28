const { urlencoded } = require("body-parser");
const express = require("express");
var favicon = require("serve-favicon");
var path = require("path");
const http = require("http");

const app = express();
const server = http.createServer(app);

let multer = require("multer");

const port = 8000;

const sequelize = require("./../config/connection");

// set storage engine
const storage = multer.diskStorage({
  destination: "./public/upload/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// int Upload
const upload = multer({
  storage: storage,
}).single("aks");

app.use(express.static(path.join(__dirname, "../public")));
app.use(favicon(path.join(__dirname, "../public", "favicon.ico")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-methods", "GET,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(`/api`, require("./routes/api/user"));
app.use(`/api`, require("./routes/api/komite"));
app.use(`/api`, require("./routes/api/alaghemandi"));

app.get("/register", async (req, res) => {
  res.sendFile(`${path.join(__dirname, "../public/register.html")}`);
});

app.get("/users", async (req, res) => {
  res.sendFile(`${path.join(__dirname, "../public/users.html")}`);
});

app.get("/test", async (req, res) => {
  res.sendFile(`${path.join(__dirname, "../public/test.html")}`);
});

app.get("/", async (req, res) => {
  res.sendFile(`${path.join(__dirname, "../public/index.html")}`);
});

// upload image
app.post("/api/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(req.file);
    }
  });
});

// sequelize.sync({ force: true });
server.listen(port, () => {
  console.log("server started on port 8000");
});
