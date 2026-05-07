const express = require('express');
const app = express();
const port = 3001; // Or any available port
const fs = require('fs');
const cors = require('cors');
const { generateData } = require('./legacy_logic');

app.use(express.json()); // Middleware to parse JSON request bodies (not strictly needed here, but good practice)
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Load data from the JSON file on startup
const legacyData = JSON.parse(fs.readFileSync('legacyData.json', 'utf8'));


app.get('/api/parental-legacy', async (req, res) => {
  const day = parseInt(req.query.day);

  if (!day || isNaN(day) || day < 1 || day > 31) {
    return res.status(400).json({ error: 'Invalid date' });
  }

  const result = await generateData(day);

  if (!result) {
    return res.status(500).json({ error: 'Data not found for this day' });
  }

  res.json(result);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
