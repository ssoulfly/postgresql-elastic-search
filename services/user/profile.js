const jwt = require("jsonwebtoken");
const pgServices = require("../../pg/services");
const config = require("../../utils/config");

module.exports.profile = async (token) => {
  let isExpired = false;
  try {
    jwt.verify(token, config.jwt.secretKey);
  } catch (e) {
    isExpired = true;
  }
  const user = await pgServices.users.getUser({ token });
  return !isExpired && user;
};
