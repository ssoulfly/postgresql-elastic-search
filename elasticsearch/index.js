const config = require("../utils/config");
const { Client } = require("@elastic/elasticsearch");
const client = new Client({
  node: config.elasticSearch.host,
  auth: {
    apiKey: config.elasticSearch.apiKey,
  },
});

module.exports = client;
