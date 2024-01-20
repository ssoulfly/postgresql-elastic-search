const { Pool } = require("pg");
const config = require("../utils/config");

let client = null;
const db = new Pool(config.postgresql);

module.exports.connect = async () => {
  client = client || (await db.connect());
  return client;
};
