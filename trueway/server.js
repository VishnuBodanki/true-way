const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Connect to MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",   // keep as root
  password: "yourpassword", // 👉 replace with the password you set during MySQL install
  database: "trueway_db" // 👉 we will create this database next
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed: " + err.stack);
    return;
  }
  console.log("✅ Connected to MySQL database");
});

// ✅ Simple test route
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

// ✅ Start server
app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
