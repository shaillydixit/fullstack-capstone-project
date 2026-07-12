const express = require('express');
const { registerGiftRoutes } = require('./giftRoutes');
const { registerSearchRoutes } = require('./searchRoutes');
const { registerAuthRoutes } = require('./authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.type('html').send(`<!doctype html><html><head><title>GiftLink</title></head><body><h1>GiftLink</h1><p>Give away items, find free treasures, and reduce waste.</p><a href="/get-started">Get Started</a></body></html>`);
});

app.get('/get-started', (req, res) => {
  res.type('text/plain').send('Get Started with GiftLink');
});

registerGiftRoutes(app);
registerSearchRoutes(app);
registerAuthRoutes(app);

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`GiftLink server listening on port ${PORT}`);
});
