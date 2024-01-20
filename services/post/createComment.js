const pgServices = require("../../pg/services");
const { getPost } = require("./getPost");

module.exports.createComment = async (payload) => {
  const { postId, userId, content } = payload;
  if (!postId || !userId || !content) {
    throw new Error("Invalid Form Body");
  }

  const post = await getPost(postId);
  if (!post) {
    throw new Error("This post has been deleted.");
  }

  const createdComments = await pgServices.post
    .createComment(postId, userId, content)
    .catch(() => ({}));

  return createdComments;
};
