module.exports = (fn) => {
  return (req, res, next) => {
    return fn(req, res, next).catch((err) => {
      console.error(`ErrorHandler =>`, err);
      res.send({
        error: true,
        message: err.message,
      });
    });
  };
};
