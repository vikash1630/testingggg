const express = require("express");
const app = express();

// Middleware (good practice)
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  console.log("Hello from simple server");
  res.status(200).json({
    success: true,
    message: "Backend server is running 🚀"
  });
});

// Port
const PORT = process.env.PORT || 4000;

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
