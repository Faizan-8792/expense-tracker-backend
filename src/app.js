const express = require('express');
const cors = require('cors');
const expenseRoutes = require('./routes/expenseRoutes');
const errorHandler = require('./middlewares/errorMiddleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/expenses', expenseRoutes);

// Error handler
app.use(errorHandler);

module.exports = app;
