
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: [
    'http://127.0.0.1:5500',
    'http://localhost:5500',
    'https://examen-full-stack-ecru.vercel.app'
  ]
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'MERN backend is running'
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'mern-api'
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
