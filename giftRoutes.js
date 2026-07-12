const { connectToDatabase } = require('./db');

function registerGiftRoutes(app) {
  app.get('/api/gifts', async (req, res) => {
    try {
      const db = await connectToDatabase();
      res.json({ count: db.items.length, items: db.items });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/api/gifts/:id', async (req, res) => {
    try {
      const db = await connectToDatabase();
      const item = db.items.find((entry) => entry._id === req.params.id);
      if (!item) {
        return res.status(404).json({ error: 'Gift not found' });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}

module.exports = { registerGiftRoutes };
