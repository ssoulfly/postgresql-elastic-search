const db = require("../..");

module.exports.deleteUser = async (id) => {
  const client = await db.connect();
  await client.query(`DELETE FROM comments WHERE userId = $1;`, [id]);
  await client.query(`DELETE FROM posts WHERE userId = $1;`, [id]);
  await client.query(`DELETE FROM users WHERE id = $1;`, [id]);
  return true;
};
