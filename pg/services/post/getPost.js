const db = require("../..");

module.exports.getPost = async (id) => {
  const client = await db.connect();
  const query = `SELECT * FROM posts WHERE deletedAt IS NULL AND id=$1;`;
  const res = await client.query(query, [id]);
  return res.rows[0];
};
