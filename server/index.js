// 🛠 1. Required Modules Import
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// 🛠 2. Middlewares Setup
app.use(cors()); // Frontend aur Backend connect karne ke liye
app.use(express.json()); // JSON data read karne ke liye

// 🛠 3. MongoDB Connection (Updated)
mongoose
  .connect("mongodb+srv://USERNAME:PASSWORD@cluster0.mongodb.net/DATABASE_NAME?retryWrites=true&w=majority")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));


// 🛠 4. Create Schema & Model for Contact Form Data
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// 🛠 5. API Route to Handle Contact Form Data
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body; // Frontend se data receive karna
    const newContact = new Contact({ name, email, message }); // MongoDB me store karna
    await newContact.save(); // Save to Database
    res.status(201).json({ success: true, message: "✅ Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, error: "❌ Server error" });
  }
});

// 🛠 6. Start Server
const PORT = process.env.PORT || 5001; // Change from 5000 to 5001
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

