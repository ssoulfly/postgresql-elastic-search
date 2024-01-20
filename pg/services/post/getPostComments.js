const db = require("../..");

module.exports.getPostComments = async (postId) => {
  const client = await db.connect();
  const query = `SELECT * FROM comments WHERE postId=$1 AND deletedAt IS NULL;`;
  const res = await client.query(query, [postId]);
  return res.rows;
};
