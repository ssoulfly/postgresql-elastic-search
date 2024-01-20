const pgServices = require("../../pg/services");

module.exports.delete = async (userId) => {
  if (!userId) {
    throw new Error("Invalid Form Body");
  }

  const user = await pgServices.users.deleteUser(userId);

  return user;
};
