const pgServices = require("../../pg/services");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const config = require("../../utils/config");
const {
  passwordValidation,
  mailValidation,
} = require("../../utils/validations");

module.exports.update = async (userId, updatingFields) => {
  if (!userId) {
    throw new Error("Invalid Form Body");
  }

  const user = await pgServices.users.getUser({
    id: userId,
  });

  // mail değiştirme kısmında mail verification eklicektim istenilen bu olduğundan ilerlemedim.
  const acceptedFields = ["fullname", "email", "oldPassword", "newPassword"];
  updatingFields = Object.keys(updatingFields).reduce((acc, field) => {
    if (acceptedFields.includes(field)) acc[field] = updatingFields[field];
    return acc;
  }, {});

  if (updatingFields["oldPassword"] || updatingFields["newPassword"]) {
    if (!updatingFields["oldPassword"] && updatingFields["newPassword"]) {
      throw new Error("Old password required");
    }
    if (updatingFields["oldPassword"] && !updatingFields["newPassword"]) {
      throw new Error("New password required");
    }

    const oldPassword = crypto
      .createHash("sha256")
      .update(updatingFields["oldPassword"])
      .digest("hex");

    if (user.hashpassword !== oldPassword) {
      throw new Error("Old Password is Wrong!");
    }

    if (!passwordValidation(updatingFields["newPassword"])) {
      throw new Error(
        "You'r password so weak! Please use special char and password must be min 8 length"
      );
    }

    const newPasswordHashed = crypto
      .createHash("sha256")
      .update(updatingFields["newPassword"])
      .digest("hex");

    delete updatingFields["oldPassword"];
    delete updatingFields["newPassword"];

    updatingFields["hashpassword"] = newPasswordHashed;
    const token = jwt.sign({ email: user.email }, config.jwt.secretKey, {
      expiresIn: "1h",
    });
    updatingFields["token"] = token;
  }
  if (updatingFields["email"] && !mailValidation(updatingFields["email"])) {
    throw new Error("Invalid mail addreses.");
  }

  const updated = await pgServices.users.updateUser(userId, updatingFields);

  return updated;
};
