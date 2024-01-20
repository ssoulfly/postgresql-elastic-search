const app = require("express").Router();

const { update } = require("lodash");
const { basicAuthMiddleware } = require("../middlewares/Auth");
const catchError = require("../middlewares/ErrorHandler");
const services = require("../services");

app.use(basicAuthMiddleware);

app.get(
  "/",
  catchError(async (req, res) => {
    const users = await services.users.all();
    res.json(users);
  })
);

app.get(
  "/@me",
  catchError(async (req, res) => {
    res.send(req.user);
  })
);

app.patch(
  "/@me",
  catchError(async (req, res) => {
    const updated = await services.users.update(req.user.id, req.body);
    res.send(updated);
  })
);

app.delete(
  "/@me",
  catchError(async (req, res) => {
    await services.users.delete(req.user.id);
    res.send(true);
  })
);

app.get(
  "/@me/comments",
  catchError(async (req, res) => {
    const comments = await services.users.getComments(req.user.id);
    res.send(comments);
  })
);

app.get(
  "/@me/posts",
  catchError(async (req, res) => {
    const posts = await services.users.getPosts(req.user.id);
    res.send(posts);
  })
);

module.exports = app;
