const services = require("../services");

const basicAuthMiddleware = async (req, res, next) => {
  try {
    const token = req.headers["token"]?.replace("Bearer ", "");
    if (!token) throw new Error("Yetersiz Yetki");
    const user = await services.users.profile(token);
    if (!user) throw new Error("Yetersiz Yetki");
    req["user"] = user;
    next();
  } catch (err) {
    console.log(err)
    res.send({
      error: true,
      message: err.message,
    });
  }
};

module.exports = {
  basicAuthMiddleware,
};
