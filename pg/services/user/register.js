const db = require("../..");
const uuid = require("uuid");

module.exports.register = async (email, fullname, hashPassword, token) => {
  const client = await db.connect();
  const id = uuid.v5(email, uuid.v5.DNS);
  const query = `INSERT INTO users(id, email, fullname, hashPassword, token) VALUES($1, $2, $3, $4, $5) RETURNING *;`;
  const res = await client.query(query, [id, email, fullname, hashPassword, token]);
  return res.rows[0];
};
