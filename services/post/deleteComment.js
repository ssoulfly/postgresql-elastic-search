const pgServices = require("../../pg/services");

module.exports.deleteComment = async (id) => {
  const deleted = await pgServices.post.deleteComment(id);
  return true;
};
