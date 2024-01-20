const config = require("../../utils/config");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { mailValidation } = require("../../utils/validations");
const pgServices = require("../../pg/services");

module.exports.login = async (payload) => {
  const { email, password } = payload;
  if (!email || !mailValidation(email) || !password) {
    throw new Error("Invalid Form Body");
  }
  const user = await pgServices.users.getUser({
    email,
  });
  if(!user){
    throw new Error("Email or password wrong!");
  }

  const hashedPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  if (hashedPassword !== user.hashpassword) {
    throw new Error("Email or password wrong!");
  }

  const token = jwt.sign({ email }, config.jwt.secretKey, {
    expiresIn: "1h",
  });

  await pgServices.users.updateUser(user.id, { token });

  return {
    token,
  };
};
