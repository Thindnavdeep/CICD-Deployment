const express = require('express');
const app = express();
const PORT = process.env.PORT || process.env.APP_PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from sample-app', ts: new Date().toISOString() });
});

app.get('/health', (req, res) => res.sendStatus(200));

app.listen(PORT, () => console.log(`Sample app listening on ${PORT}`));

module.exports = app;
