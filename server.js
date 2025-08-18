require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./src/config/db');

const app = express();
app.use(cors());
app.use(express.json());

// Homepage route — show backend + DB status
app.get('/', (req, res) => {
  const mongoStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected';
  res.json({
    success: true,
    message: 'Backend is running',
    mongodb: mongoStatus
  });
});

// Routes
app.use('/api/users', require('./src/routes/users'));
app.use('/api/expenses', require('./src/routes/expenses'));

// Start server
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.error('DB connection error:', err));
