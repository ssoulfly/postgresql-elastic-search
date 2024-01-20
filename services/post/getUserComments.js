const pgServices = require("../../pg/services");

module.exports.getUserComments = async (userId) => {
  const comments = await pgServices.post.getUserComments(userId);
  return comments;
};
