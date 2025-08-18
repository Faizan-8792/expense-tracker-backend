const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  userId: String,   // Store as plain text for simplicity
  title: String,
  amount: Number,
  category: String,
  date: Date
}, { timestamps: true });

module.exports = mongoose.model('Expense', expenseSchema);
