const pgServices = require("../../pg/services");

module.exports.createPost = async (payload) => {
  const { title, description, category, userId } = payload;
  if (!title || !description || !category || !userId) {
    throw new Error("Invalid Form Body");
  }

  const createdPost = await pgServices.post
    .createPost(title, description, category, userId)
    .catch(() => ({}));

  return createdPost;
};
