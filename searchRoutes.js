const { connectToDatabase } = require('./db');

function registerSearchRoutes(app) {
  app.get('/api/search', async (req, res) => {
    try {
      const { category } = req.query;
      const db = await connectToDatabase();
      const filteredItems = category
        ? db.items.filter((item) => item.category.toLowerCase() === category.toLowerCase())
        : db.items;
      res.json({ count: filteredItems.length, items: filteredItems });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}

module.exports = { registerSearchRoutes };
