const express = require("express");
const cors = require("cors");
const { Client } = require("pg");
const dotenv = require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const client = new Client({
  connectionString: process.env.NETLIFY_DATABASE_URL,
});

client.connect()
  .then(() => console.log("DB Connected ✅"))
  .catch(err => console.error("DB Connection Error ❌", err));

app.get("/test", async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM posts LIMIT 1");
    res.json({ success: true, data: result.rows });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const result = await client.query(
      "SELECT id, email, name FROM users WHERE email = $1 AND password = $2",
      [email, password]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user = result.rows[0];
    // In a real app, you'd use JWT or sessions here
    const token = `token_${user.id}_${Date.now()}`;

    res.json({
      success: true,
      user: { id: user.id, email: user.email, name: user.name },
      token: token
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/posts", async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM posts ORDER BY created_at DESC");
    res.json({ success: true, posts: result.rows });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post("/posts", async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  try {
    const result = await client.query(
      "INSERT INTO posts (title, content, created_at) VALUES ($1, $2, NOW()) RETURNING *",
      [title, content]
    );

    res.status(201).json({ success: true, post: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
