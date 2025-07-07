const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to the Blogging App backend! 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
