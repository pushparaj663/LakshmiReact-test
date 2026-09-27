import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

const RESULTS_FILE = './results.json';

// Initialize results file if it doesn't exist
if (!fs.existsSync(RESULTS_FILE)) {
  fs.writeFileSync(RESULTS_FILE, JSON.stringify([]));
}

app.get('/api/results', (req, res) => {
  const data = JSON.parse(fs.readFileSync(RESULTS_FILE, 'utf8'));
  res.json(data);
});

app.post('/api/results', (req, res) => {
  const result = req.body;
  const data = JSON.parse(fs.readFileSync(RESULTS_FILE, 'utf8'));
  data.push(result);
  fs.writeFileSync(RESULTS_FILE, JSON.stringify(data, null, 2));
  res.status(201).json({ message: 'Result saved successfully' });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
