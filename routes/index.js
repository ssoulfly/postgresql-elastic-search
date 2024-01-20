const app = require("express").Router();

app.get("/", (req, res) => {
  res.send("Hello World </>");
});

module.exports = app;
