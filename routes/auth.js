const services = require("../services");
const catchError = require("../middlewares/ErrorHandler");
const app = require("express").Router();

// done
app.post(
  "/login",
  catchError(async (req, res) => {
    const response = await services.users.login(req.body);
    res.send(response);
  })
);

app.post(
  "/register",
  catchError(async (req, res) => {
    const registed = await services.users.register(req.body);
    res.send(registed);
  })
);

module.exports = app;
