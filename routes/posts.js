const app = require("express").Router();
const { basicAuthMiddleware } = require("../middlewares/Auth");
const catchError = require("../middlewares/ErrorHandler");
const services = require("../services");

app.use(basicAuthMiddleware);

app.get(
  "/",
  catchError(async (req, res) => {
    const posts = await services.posts.getAllPosts(req.query);
    res.send(posts);
  })
);

app.get(
  "/:id",
  catchError(async (req, res) => {
    const post = await services.posts.getPost(req.params.id);
    res.send(post);
  })
);

app.post(
  "/",
  catchError(async (req, res) => {
    const post = await services.posts.createPost({
      ...req.body,
      userId: req.user.id,
    });
    res.send(post);
  })
);

app.get(
  "/:id/comments",
  catchError(async (req, res) => {
    const comments = await services.posts.getComments(req.params.id);
    res.send(comments);
  })
);

app.post(
  "/:id/comments",
  catchError(async (req, res) => {
    const comment = await services.posts.createComment({
      postId: req.params.id,
      userId: req.user.id,
      content: req.body.content,
    });
    res.send(comment);
  })
);

app.delete(
  "/comments/:id",
  catchError(async (req, res) => {
    const comment = await services.posts.deleteComment(req.params.id);
    res.send(comment);
  })
);

app.patch(
  "/:id",
  catchError(async (req, res) => {
    const updated = await services.posts.updatePost(req.params.id, req.body);
    res.send(updated);
  })
);

app.delete(
  "/:id",
  catchError(async (req, res) => {
    const response = await services.posts.deletePost(req.params.id);
    res.send(response);
  })
);

module.exports = app;
