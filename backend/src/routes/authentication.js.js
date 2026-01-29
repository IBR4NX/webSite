const express = require("express");
const crypto = require("crypto");
const client = require("../database");
const router = express.Router();

function verifyPassword(stored, passwordAttempt) {
  if (!stored) return false;
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const attempt = crypto.pbkdf2Sync(passwordAttempt, salt, 10000, 64, "sha512").toString("hex");
  return attempt === hash;
}

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const result = await client.query(
      "SELECT id, email, name, password FROM users WHERE email = $1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user = result.rows[0];
    const ok = verifyPassword(user.password, password);
    if (!ok) return res.status(401).json({ error: "Invalid email or password" });

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
