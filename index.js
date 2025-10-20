// index.js
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Sample route
app.get('/', (req, res) => {
  res.send('Hello from sample app!');
});

app.get('/health', (req, res) => res.sendStatus(200));

// Only start the server if this file is run directly
if (require.main === module) {
  const server = app.listen(PORT, () => console.log(`Sample app listening on ${PORT}`));
}

module.exports = app; // 👈 Export the app only, not the server
