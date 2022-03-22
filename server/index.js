const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  }),
  // express.urlencoded({ extended: true }),
  function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  }
);

const db = mysql.createConnection({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get("/getUsers", (req, res) => {
  db.query("SELECT * FROM users", (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});

app.get("/getUserFromId", (req, res) => {
  const userId = req.body.userId;
  db.query(
    "SELECT user_name FROM users WHERE user_id = ?",
    [userId],
    (error, rows) => {
      if (error) throw error;
      res.send(rows);
    }
  );
});
app.listen(process.env.SERVER_PORT, () => {
  console.log("running server on " + process.env.SERVER_PORT);
});