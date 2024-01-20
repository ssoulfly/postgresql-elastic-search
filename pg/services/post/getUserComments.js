const db = require("../..");

module.exports.getUserComments = async (userId) => {
  const client = await db.connect();
  const query = `SELECT * FROM comments WHERE userId=$1 AND deletedAt IS NULL;`;
  const res = await client.query(query, [userId]);
  return res.rows;
};
