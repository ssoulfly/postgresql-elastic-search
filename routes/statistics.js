const app = require("express").Router();

const { basicAuthMiddleware } = require("../middlewares/Auth");
const catchError = require("../middlewares/ErrorHandler");
const services = require("../services");

app.use(basicAuthMiddleware);

app.get(
  "/users",
  catchError(async (req, res) => {
    const stats = await services.statistics.getUserStats();
    res.json(stats);
  })
);

app.get(
  "/categories",
  catchError(async (req, res) => {
    const stats = await services.statistics.getCategoryStats();
    res.json(stats);
  })
);

app.get(
  "/blogs/weekly",
  catchError(async (req, res) => {
    const stats = await services.statistics.getWeeklyBlogStats();
    res.json(stats);
  })
);

app.get(
  "/blogs/monthly",
  catchError(async (req, res) => {
    const stats = await services.statistics.getMonthlyBlogStats();
    res.json(stats);
  })
);

app.get(
  "/blogs/annualy",
  catchError(async (req, res) => {
    const stats = await services.statistics.getAnnualyBlogStats();
    res.json(stats);
  })
);

module.exports = app;
