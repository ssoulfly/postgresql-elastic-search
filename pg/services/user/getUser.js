const db = require("../..");

module.exports.getUser = async (filters) => {
  const { id, email, token } = filters;
  const client = await db.connect();
  const query = `SELECT id, fullname, email, hashPassword, createdat, updatedat FROM users WHERE id=$1 OR email=$2 OR token=$3;`;
  const res = await client.query(query, [id, email, token]);
  return res.rows[0];
};
