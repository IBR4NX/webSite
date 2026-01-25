const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  connectionString: process.env.NETLIFY_DATABASE_URL,
});

client.connect()
  .then(() => console.log("DB Connected ✅"))
  .catch(err => console.error("DB Connection Error ❌", err));

module.exports = client;
