const express = require("express");
const client = require("../db");
const router = express.Router();
router.post("/login", async (req, res) => {
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

module.exports = router;
