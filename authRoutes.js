const jwt = require('jsonwebtoken');

const users = [];

function registerAuthRoutes(app) {
  app.post('/api/auth/register', (req, res) => {
    const data = req.body || {};
    const user = { username: data.username, email: data.email, password: data.password };
    users.push(user);
    const token = jwt.sign({ username: user.username, email: user.email }, 'secret_key');
    res.status(201).json({ token, user });
  });

  app.post('/api/auth/login', (req, res) => {
    const data = req.body || {};
    const user = users.find((entry) => entry.email === data.email && entry.password === data.password);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ username: user.username, email: user.email }, 'secret_key');
    res.json({ token, user });
  });

  app.put('/api/auth/user', (req, res) => {
    const data = req.body || {};
    const existing = users.find((entry) => entry.email === data.email);
    if (!existing) {
      return res.status(404).json({ error: 'User not found' });
    }
    existing.username = data.username || existing.username;
    existing.password = data.password || existing.password;
    res.json({ user: existing });
  });
}

module.exports = { registerAuthRoutes };
