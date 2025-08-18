const User = require('../models/User');
const Expense = require('../models/Expense'); // Import Expense model

// Create user
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete user and their expenses
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Delete all expenses linked to this user
    await Expense.deleteMany({ userId });

    res.json({ message: 'User and their expenses deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
