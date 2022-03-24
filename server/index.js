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

const USERS_TABLE_NAME = "users";

const GET_MESSAGES_SQL = `SELECT * FROM messages messages WHERE message_from = ? AND message_to = ? OR message_from = ? AND message_to = ?`;

app.get("/getUsers", (req, res) => {
  db.query(`SELECT * FROM ${USERS_TABLE_NAME}`, (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});

app.post("/getUserFromId", (req, res) => {
  const userId = req.body.userId;
  db.query(
    `SELECT user_name FROM ${USERS_TABLE_NAME} WHERE user_id = ?`,
    [userId],
    (error, rows) => {
      if (error) throw error;
      res.send(rows);
    }
  );
});

app.post("/getMessages", (req, res) => {
  const messageFrom = req.body.userId;
  const messageTo = req.body.conversationUserId;
  db.query(
    GET_MESSAGES_SQL,
    [messageFrom, messageTo, messageTo, messageFrom],
    (error, rows) => {
      if (error) throw error;
      res.send(rows);
    }
  );
});

app.post("/getLastMessage", (req, res) => {
  const messageFrom = req.body.userId;
  const messageTo = req.body.parsedId;
  db.query(
    `${GET_MESSAGES_SQL} ORDER BY message_id DESC LIMIT 1 `,
    [messageFrom, messageTo, messageTo, messageFrom],
    (error, rows) => {
      if (error) throw error;
      res.send(rows);
    }
  );
});

app.post("/sendMessage", (req, res) => {
  const message = req.body.trimmedMessage;
  const messageTo = req.body.activeChat;
  const messageFrom = req.body.userId;
  const dateTime = req.body.dateTime;
  db.query(
    `INSERT INTO messages(message_from, message_to, message_text, time_sent)VALUES(?,?,?,?)`,
    [messageFrom, messageTo, message, dateTime]
  );
});
app.listen(process.env.SERVER_PORT, () => {
  console.log("running server on " + process.env.SERVER_PORT);
});
