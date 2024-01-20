const config = require("../../utils/config");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const {
  mailValidation,
  passwordValidation,
} = require("../../utils/validations");
const pgServices = require("../../pg/services");

module.exports.register = async (payload) => {
  const { email, fullname, password, passwordAgain } = payload;
  if (
    !email ||
    !mailValidation(email) ||
    !fullname ||
    password !== passwordAgain
  ) {
    throw new Error("Invalid Form Body");
  }

  if (!passwordValidation(password)) {
    throw new Error(
      "You'r password so weak! Please use special char and password must be min 8 length"
    );
  }

  const hashPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  const token = jwt.sign({ email, password }, config.jwt.secretKey, {
    expiresIn: "1h",
  });

  try {
    await pgServices.users.register(email, fullname, hashPassword, token);
  } catch (error) {
    throw new Error("User already exits.");
  }

  return {
    token,
  };
};
