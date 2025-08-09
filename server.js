const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const expenseRoutes = require("./routes/expenses");
const { connectDB, dbConnected } = require("./config/db");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Home route to show status
app.get("/", (req, res) => {
  res.json({
    message: "Backend is live ✅",
    database: dbConnected() ? "Connected ✅" : "Not connected ❌"
  });
});

// API routes
app.use("/api/expenses", expenseRoutes);

// Connect DB and start server
connectDB().then(() => {
  app.listen(5000, () => {
    console.log("🚀 Server started on port 5000");
  });
});
