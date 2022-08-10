const express = require("express");
const request = require("request");

const app = express();
const port = process.env.PORT || 3001;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.ORIGIN || "*");
  next();
});

app.get("/", (req, res) => {
  const endpoint = req.query["endpoint"];
  const url = `https://fantasy.premierleague.com/api/${endpoint}`;
  console.log(url);
  request(url).pipe(res);
});

app.listen(port);
