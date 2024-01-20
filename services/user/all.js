const pgServices = require("../../pg/services");

module.exports.all = async () => {
  const users = await pgServices.users.all();
  return users;
};
