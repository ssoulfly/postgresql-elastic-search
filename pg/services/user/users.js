const db = require("../..");

module.exports.users = async () => {
  const client = await db.connect();
  const query = `SELECT id, fullname, email FROM users;`;
  const res = await client.query(query);
  return res.rows;
};
